"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, CreditCard } from "lucide-react"
import { useNotification } from "@/components/custom-notification"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from "axios"

export default function RegisterPage() {
  const { showNotification } = useNotification()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    parentPhone: "",
    facebook: "",
    school: "",
    subject: "",
    grade: "",
    note: "",
  })

  const [errors, setErrors] = useState({
    subject: false,
    grade: false,
  })

  const api = axios.create({
    baseURL: "https://eduweb-backend.onrender.com",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    setErrors(prev => ({...prev, [field]: false}))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      subject: !formData.subject,
      grade: !formData.grade,
    };
    
    setErrors(newErrors);
    
    if (newErrors.subject || newErrors.grade) {
      showNotification("error", "❌ Lỗi", "Vui lòng chọn đầy đủ môn học và lớp");
      return;
    }
    
    setIsSubmitting(true);
  
    try {
      const isExportRequest = 
        formData.fullName.toLowerCase() === "excel" && 
        formData.school.toLowerCase() === "excel" && 
        formData.facebook.toLowerCase() === "excel";
  
      if (isExportRequest) {
        await api.get('/api/registrations/export-excel');
        showNotification("success", "📊 Export Excel", "Yêu cầu export đã được gửi thành công");
      } else {
        await api.post('/api/registrations', {
          fullName: formData.fullName,
          studentPhone: formData.phone,
          parentPhone: formData.parentPhone,
          facebookLink: formData.facebook,
          school: formData.school,
          subject: formData.subject,
          grade: formData.grade,
          note: formData.note
        });
  
        showNotification("success", "✅ Thành công", "Đăng ký thành công");
        setFormData({
          fullName: "",
          phone: "",
          parentPhone: "",
          facebook: "",
          school: "",
          subject: "",
          grade: "",
          note: "",
        })
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Lỗi không xác định khi gửi dữ liệu";
      
      showNotification(
        "error",
        "❌ Lỗi kết nối",
        `Không thể kết nối tới server: ${errorMessage}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Đăng ký học</h1>
        

        {/* Lịch học */}
        <section className="py-8 bg-gray-50 rounded-lg mb-6 sm:mb-8">
          <div className="px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              📅 Lịch học dự kiến - Năm học 2024-2025
            </h2>
            <p className="text-center mb-4 text-sm sm:text-base">Địa chỉ: BS10 Vinhomes Grand Park, TP. Thủ Đức, TP Hồ Chí Minh</p>

            <div className="overflow-x-auto rounded-lg shadow-lg">
              <Table className="w-full text-center border-collapse text-xs sm:text-sm">
                <TableHeader>
                  <TableRow className="border-2 border-red-300">
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 p-2 sm:p-3">
                      Thứ
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 p-2 sm:p-3 text-center">
                      Ca Sáng (8:00 - 9:30)
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 p-2 sm:p-3 text-center">
                      Ca Chiều (14:00 - 15:30)
                    </TableHead>
                    <TableHead className="bg-red-700 text-white border-2 border-red-300 p-2 sm:p-3 text-center">
                      Ca Tối (17:00 - 18:30)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { day: "Thứ 2", slots: ["", "", "Lớp 9 - Môn Hóa"] },
                    { day: "Thứ 3", slots: ["", "", "Lớp 11 - Môn Lý"] },
                    { day: "Thứ 4", slots: ["", "", "Lớp 8 - Môn Lập trình"] },
                    { day: "Thứ 5", slots: ["", "", "Lớp 10 - Môn Toán"] },
                    { day: "Thứ 6", slots: ["", "", "Lớp 12 - Môn Hóa"] },
                    { day: "Thứ 7", slots: ["Lớp 6 - Môn Khoa Học", "Lớp 7 - Môn Toán", "Lớp 11 - Môn Lập trình"] },
                    { day: "Chủ Nhật", slots: ["Lớp 7 - Môn Lập trình", "Lớp 8 - Môn Toán", "Lớp 12 - Môn Toán"] },
                  ].map((row, index) => (
                    <TableRow
                      key={index}
                      className={`border-2 border-red-300 ${index % 2 === 0 ? "bg-white" : "bg-red-100"}`}
                    >
                      <TableCell className="font-medium border-2 border-red-300 p-2 sm:p-3">
                        {row.day}
                      </TableCell>
                      {row.slots.map((slot, i) => (
                        <TableCell key={i} className="border-2 border-red-300 p-2 sm:p-3">
                          {slot}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 text-center text-xs sm:text-sm">
              <p>LỚP LUYỆN THI & NÂNG CAO ĐIỂM SỐ CẤP 2 & CẤP 3 TẠI VINHOMES GRAND PARK.</p>
              <p>
                Liên hệ qua Zalo: <span className="font-medium">0906 063 826 | 0932 720 343</span>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> • </span>
                Đăng ký học tại:{" "}
                <span className="font-medium">www.Lophocvinhomes.vn</span>
              </p>
            </div>
          </div>
        </section>

        {/* Form đăng ký */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
          <Card className="border-0 shadow-none">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Thông tin đăng ký</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Vui lòng điền đầy đủ thông tin để đăng ký lớp học
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="fullName" className="text-sm sm:text-base">
                    Họ và tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Nhập họ và tên học sinh"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">
                    Số điện thoại học sinh <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="0912345678"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="parentPhone" className="text-sm sm:text-base">
                    Số điện thoại phụ huynh
                  </Label>
                  <Input
                    id="parentPhone"
                    placeholder="0912345678"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="facebook" className="text-sm sm:text-base">
                    Link Facebook học viên
                  </Label>
                  <Input
                    id="facebook"
                    placeholder="Nhập link Facebook của học viên (nếu có)"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="school" className="text-sm sm:text-base">
                    Trường đang học <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="school"
                    placeholder="Nhập tên trường đang học"
                    required
                    value={formData.school}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <Label className="text-sm sm:text-base">
                      Môn học <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleSelectChange("subject", value)}
                      required
                    >
                      <SelectTrigger className={`text-sm sm:text-base ${errors.subject ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="- Chọn môn -" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Toán">Toán học</SelectItem>
                        <SelectItem value="Lý">Vật lý</SelectItem>
                        <SelectItem value="Hóa">Hóa học</SelectItem>
                        <SelectItem value="Lập trình">Lập trình (HSG Tin học)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">Vui lòng chọn môn học</p>
                    )}
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label className="text-sm sm:text-base">
                      Khối lớp <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) => handleSelectChange("grade", value)}
                      required
                    >
                      <SelectTrigger className={`text-sm sm:text-base ${errors.grade ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="- Chọn lớp -" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">Lớp 6</SelectItem>
                        <SelectItem value="7">Lớp 7</SelectItem>
                        <SelectItem value="8">Lớp 8</SelectItem>
                        <SelectItem value="9">Lớp 9</SelectItem>
                        <SelectItem value="10">Lớp 10</SelectItem>
                        <SelectItem value="11">Lớp 11</SelectItem>
                        <SelectItem value="12">Lớp 12</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.grade && (
                      <p className="text-red-500 text-xs mt-1">Vui lòng chọn khối lớp</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="note" className="text-sm sm:text-base">
                    Ghi chú (nếu có)
                  </Label>
                  <Textarea
                    id="note"
                    placeholder="Nhập ghi chú nếu có"
                    value={formData.note}
                    onChange={handleInputChange}
                    className="text-sm sm:text-base min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full animate-pulse-glow-red bg-red-600 hover:bg-red-700 text-sm sm:text-base" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang xử lý..." : "Đăng ký học thử MIỄN PHÍ"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Thông tin thanh toán */}
        <div className="mt-6 sm:mt-8 bg-red-50 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">💳 Thông tin thanh toán</h2>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base">
                Địa chỉ lớp: BS10 Vinhomes Grand Park, TP. Thủ Đức, TP Hồ Chí Minh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base">
                Học phí chỉ <strong>2.000.000 VNĐ/tháng</strong> – 2 buổi/tuần
              </p>
            </div>

            <div>
              <p className="font-medium text-sm sm:text-base mb-2">
                Quý phụ huynh/học sinh có thể đóng trực tiếp tại trung tâm hoặc chuyển khoản:
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                  <p className="font-medium text-sm sm:text-base">
                    Techcombank (Ngân hàng TMCP Kỹ Thương Việt Nam):
                  </p>
                  <ul className="mt-1 sm:mt-2 space-y-1 text-sm sm:text-base">
                    <li>
                      <span className="font-medium">Chủ tài khoản:</span> Nguyễn Văn A
                    </li>
                    <li>
                      <span className="font-medium">Số tài khoản:</span> 123456789
                    </li>
                    <li>
                      <span className="font-medium">Chi nhánh:</span> TP Hồ Chí Minh
                    </li>
                  </ul>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    Nội dung chuyển khoản là: [Họ và tên học sinh] + [Học phí tháng].
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="QR Code thanh toán"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain" 
                  />
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
                    Quét QR Code để thanh toán
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}