import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lớp học tại Vinhomes Grand Park</h3>
            <div className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>Địa chỉ: BS10 Vinhomes Grand Park,  TP Thủ Đức, TP Hồ Chí Minh</span>
            </div>
            <div className="flex items-center mt-4">
              <Phone className="h-5 w-5 mr-2" />
              <span>Hotline: 0906 063 826 | 0932 720 343</span>
            </div>
            <div className="flex items-center mt-2">
              <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>Email: lophocvinhomes.infor@gmail.com</span>
            </div>
          </div>

          {/* Liên Kết nhanh */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-300 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-red-300 transition-colors">
                  Đăng ký học
                </Link>
              </li>
              <li>
                <Link href="/honor" className="hover:text-red-300 transition-colors">
                  Vinh danh
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-red-300 transition-colors">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link href="/tuition" className="hover:text-red-300 transition-colors">
                  Học phí
                </Link>
              </li>
            </ul>
          </div>

          {/* Kết nối với chúng tôi */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4 items-center">
              <Link href="https://www.facebook.com/nguyen.ngoc.phuc.511590/" className="hover:text-red-300 transition-colors">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="https://www.tiktok.com/@maitheduy1709" className="hover:text-red-300 transition-colors">
                <FaTiktok className="h-8 w-8" />
              </Link>
              <Link href="https://zalo.me/0906063826" className="group">
                <div className="relative h-8 w-8">
                  <Image 
                    src="/zalo-logo-white.svg" 
                    alt="Zalo" 
                    width={32}
                    height={32}
                    className="absolute h-8 w-8 group-hover:opacity-0 transition-opacity"
                  />
                  <Image 
                    src="/zalo-logo-text-red-300.svg" 
                    alt="Zalo" 
                    width={32}
                    height={32}
                    className="absolute h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
              <Link href="tel:0971515451" className="hover:text-red-300 transition-colors">
                <Phone className="h-8 w-8" />
              </Link>
            </div>
          </div>

          {/* Phần Google Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bản đồ</h3>
            <div className="aspect-w-16 aspect-h-9 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.674663887764!2d106.8434938463369!3d10.846815060896454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521e828da24b7%3A0xa0586f58ab2172af!2sBS11%20-%20The%20Oasis%20-%20Vinhomes%20Grand%20Park!5e0!3m2!1sen!2s!4v1756461869416!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <Link
              href="https://maps.app.goo.gl/wZMk8Jm75w3btVAH6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:text-red-300 transition-colors mt-2"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Mở bằng Google Map
            </Link>
            <div className="mt-2 text-xs text-gray-300">
              <p>Dữ liệu Bản đồ</p>
              <p>Điều khoản</p>
              <p>Báo cáo một lỗi bản đồ</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Lớp học tại Vinhomes Grand Park. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">LỚP LUYỆN THI & NÂNG CAO ĐIỂM SỐ CẤP 2 & CẤP 3</p>
          <p className="mt-1">TOÁN - LÝ - HÓA & LẬP TRÌNH (HSG TIN HỌC)</p>
          <p className="mt-2">Thiết kế bởi Ngọc Phúc</p>
        </div>
      </div>
    </footer>
  )
}