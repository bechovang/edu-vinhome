import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import CountdownTimer from "@/components/countdown-timer"
import HighScoreStudents from "@/components/high-score-students"
import RecentPosts from "@/components/recent-posts"
import ClassGallery from "@/components/class-gallery"
import TeacherGallery from "@/components/teacher-gallery"
import FloatingCallButton from "@/components/FloatingCallButton"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-background.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-red-900/70"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-white">
              <div className="flex items-center mb-6">
                <Image src="/images/logo.jpg" alt="Logo Ánh Bình Minh" width={80} height={80} className="mr-4" />
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">📢 TUYỂN SINH LỚP LUYỆN THI & NÂNG CAO ĐIỂM SỐ</h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-2">TOÁN - LÝ - HÓA & LẬP TRÌNH (HSG TIN HỌC)</h2>
                </div>
              </div>
              <p className="text-lg mb-4 max-w-xl">
                🌟 Đội ngũ tinh hoa - Lộ trình cá nhân hóa - Dạy cả học sinh mất gốc - Chinh phục mọi mục tiêu học tập!
              </p>
              <p className="text-lg mb-6 max-w-xl">
                💰 Học phí: <strong>2.000.000 VNĐ/tháng</strong> – Học thử 1 buổi MIỄN PHÍ
              </p>
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="animate-pulse-glow-amber bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg transition-all duration-300">
                  Đăng ký học thử MIỄN PHÍ
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-center text-white">Kỳ thi Tốt nghiệp THPT năm 2026 còn</h3>
                <CountdownTimer targetDate="2026-06-26T00:00:00" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bạn đang tìm giải pháp để con...? */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">📈 Bạn đang tìm giải pháp để con:</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Lấy lại kiến thức căn bản, không còn lo mất gốc?",
              "Nắm vững kiến thức, tự tin hơn trong các kỳ thi quan trọng?",
              "Đạt điểm cao, vào được trường chuyên, lớp chọn mơ ước?",
              "Phát triển tư duy logic, giải quyết vấn đề vượt trội?",
              "Bứt phá trong các kỳ thi Học sinh giỏi Tin học, Olympic Tin học?",
              "Được tư vấn định hướng nghề nghiệp, chọn ngành học phù hợp?"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✅</span>
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đội ngũ giảng dạy & Khóa học tuyển sinh - Combined Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">💡 Đội ngũ giảng dạy hàng đầu & 📚 Khóa học tuyển sinh</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Đội ngũ giảng dạy */}
            <div className="space-y-6">
              <div className="p-5 border rounded-lg bg-white shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">👨‍🏫</span>
                  <h3 className="text-lg font-bold">Tiến sĩ Toán học (tốt nghiệp Đức)</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Giảng dạy tại các trường ĐH danh tiếng, trực tiếp đứng lớp, mang đến phương pháp học tập khoa học, logic quốc tế.
                </p>
              </div>
              <div className="p-5 border rounded-lg bg-white shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">👩‍💻</span>
                  <h3 className="text-lg font-bold">Sinh viên ưu tú ngành CNTT & AI</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Dẫn dắt học sinh khám phá lập trình từ cơ bản đến nâng cao, đặc biệt phục vụ mục tiêu thi HSG Tin học.
                </p>
              </div>
            </div>

            {/* Khóa học tuyển sinh */}
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Toán - Lý - Hóa (Cấp 2 & Cấp 3)</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  <li>Củng cố nền tảng, hỗ trợ học sinh mất gốc.</li>
                  <li>Ôn thi chuyển cấp (6 → 9), luyện thi THPT Quốc gia (10 → 12).</li>
                  <li>Phát triển tư duy giải bài tập khó.</li>
                </ul>
              </div>

              <div className="p-5 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Lập Trình (HSG Tin học)</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  <li><strong>THCS:</strong> Scratch, Python, C++ – luyện thi HSG.</li>
                  <li><strong>THPT:</strong> C++, Python nâng cao, thuật toán chuyên sâu.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ưu điểm vượt trội & Ưu đãi đặc biệt - Combined Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">🎯 Ưu điểm vượt trội & 🔥 Ưu đãi đặc biệt</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Ưu điểm vượt trội */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center text-red-700">Ưu điểm vượt trội</h3>
              <div className="space-y-3">
                {[
                  "Nhận cả học sinh mất gốc – dạy chắc từ nền tảng đến nâng cao",
                  "Đội ngũ giảng viên uy tín: Tiến sĩ Toán & chuyên gia lập trình",
                  "Lớp học tinh gọn: 8–12 học sinh, quan tâm sát sao",
                  "Lộ trình cá nhân hóa, đánh giá đầu vào miễn phí",
                  "Tài liệu độc quyền, bám sát cấu trúc đề thi",
                  "Hỗ trợ 24/7 qua group học tập riêng"
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-white rounded-lg shadow">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ưu đãi đặc biệt */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center text-red-700">Ưu đãi đặc biệt trong tháng này</h3>
              <div className="space-y-4">
                <div className="p-4 bg-amber-100 rounded-lg border border-amber-300">
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">🎁</span>
                      <span>Giảm 20% cho 15 học sinh đăng ký sớm nhất</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">🎁</span>
                      <span>Tặng bộ tài liệu ôn thi độc quyền + Sổ tay công thức/thuật toán</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">🎁</span>
                      <span>Miễn phí buổi định hướng nghề nghiệp 1-1 cho học sinh THPT</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <p className="text-lg font-bold text-red-600 mb-4">
                    💰 Học phí chỉ 2.000.000 VNĐ/tháng – 2 buổi/tuần
                  </p>
                  <Link href="/register">
                    <Button size="lg" className="animate-pulse-glow-amber bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-4 text-base">
                      Đăng ký ngay để nhận ưu đãi
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            📅 Lịch học dự kiến - Năm học 2024-2025
          </h2>
          <p className="text-center mb-6">Địa chỉ: BS10 Vinhomes Grand Park, TP. Thủ Đức, TP Hồ Chí Minh</p>

          <div className="overflow-x-auto rounded-lg shadow-lg">
            <Table className="w-full text-center border-collapse">
              <TableHeader>
                <TableRow className="border-2 border-red-300">
                  <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                    Thứ
                  </TableHead>
                  <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                    Ca Sáng (8:00 - 9:30)
                  </TableHead>
                  <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
                    Ca Chiều (14:00 - 15:30)
                  </TableHead>
                  <TableHead className="bg-red-700 text-white border-2 border-red-300 text-center">
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
                    <TableCell className="font-medium border-2 border-red-300 text-center">
                      {row.day}
                    </TableCell>
                    {row.slots.map((slot, i) => (
                      <TableCell key={i} className="border-2 border-red-300 text-center">
                        {slot}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-3">LỚP LUYỆN THI & NÂNG CAO ĐIỂM SỐ CẤP 2 & CẤP 3 TẠI VINHOMES GRAND PARK.</p>
            <p className="mb-6">Liên hệ qua Zalo: <span className="font-medium">0906 063 826 | 0932 720 343</span> - Đăng ký học tại: <span className="font-medium">www.Lophocvinhomes.vn</span></p>
            <Link href="/register">
              <Button size="lg" className="animate-pulse-glow-amber bg-amber-500 hover:bg-amber-600">
                Đăng ký học
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* High Score Students Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            DANH SÁCH HỌC SINH ĐIỂM CAO TẠI TRUNG TÂM
          </h2>
          <HighScoreStudents />
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Một số hình ảnh về lớp</h2>
          <ClassGallery />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Đội ngũ giáo viên xuất sắc</h2>
          <TeacherGallery />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Một số bài viết mới</h2>
          <RecentPosts />
        </div>
      </section>

      {/* Thêm component FloatingCallButton vào cuối */}
      <FloatingCallButton />
    </main>
  )
}