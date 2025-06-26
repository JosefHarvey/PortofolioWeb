import { useState } from "react";
import ThemeToggle from "./themeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Ikon untuk hamburger dan close
import { FaLinkedinIn, FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"; // Ikon sosial media

export default function Navbar() {
    // State untuk mengontrol visibilitas menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Daftar link navigasi untuk menghindari duplikasi kode
    const navLinks = [
        { href: "#home", title: "HOME" },
        { href: "#features", title: "FEATURES" },
        { href: "#projects", title: "PROJECTS" },
        { href: "#resume", title: "RESUME" },
        { href: "#contact", title: "CONTACT" },
    ];

    return (
        <>
            {/* Navbar Utama */}
            <div className="navbar sticky top-0 bg-white z-40 dark:bg-[#030712]">
                <div className="flex px-4 md:px-10 lg:px-28 py-6 justify-between items-center shadow-md">
                    <div className="flex-shrink-0">
                        <ThemeToggle />
                    </div>

                    {/* Navigasi Desktop (Disembunyikan di mobile) */}
                    <div className="hidden md:flex gap-10 dark:text-[#a1a1aa] text-sm font-medium">
                        {navLinks.map((link) => (
                            <a key={link.title} href={link.href} className="dark:hover:text-white hover:text-red-500 transition-colors duration-300">
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Logo/Placeholder & Tombol Hamburger (Hanya tampil di mobile) */}
                    <div className="flex md:hidden items-center gap-4">
                        <button onClick={() => setIsMenuOpen(true)} className="text-red-500 dark:text-[#db2777] text-3xl">
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================================
              == SIDEBAR MENU MOBILE (KONTEN DARI GAMBAR YANG ANDA BERI) ==
              ============================================================
            */}
            <div
                className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white  z-50 transform transition-transform duration-300 ease-in-out flex flex-col dark:bg-[#111827] dark:text-white ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Bagian Atas Sidebar (Header) */}
                <div>
                    <div className="flex justify-between items-center p-6 border-b border-gray-700">
                        <h2 className="font-bold text-lg">Josef Harvey</h2>
                        <button onClick={() => setIsMenuOpen(false)} className="text-2xl dark:text-[#db2777]">
                            <HiX />
                        </button>
                    </div>
                </div>

                {/* Bagian Tengah Sidebar (Navigasi) - Dibuat "flex-grow" agar footer terdorong ke bawah */}
                <nav className="flex-grow p-6 space-y-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-gray-500  transition-colors duration-300 block dark:text-white"
                            onClick={() => setIsMenuOpen(false)} // Menutup menu setelah link diklik
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>

                {/* Bagian Bawah Sidebar (Footer) */}
                <div className="p-6 border-t border-gray-700">
                    {/* "Find Me On" Section */}
                    <div className="mb-5">
                        <p className="dark:text-gray-400 text-sm mb-4">FIND ME ON</p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/josef-harvey/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-red-500 dark:text-[#db2777] shadow-lg dark:bg-[#0f172a] dark:shadow-[1px_1px_25px_#374151,_-1px_-1px_25px_#2e3338]  rounded  "><FaLinkedinIn /></a>
                            <a href="https://github.com/JosefHarvey" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-red-500 dark:text-[#db2777] shadow-lg dark:bg-[#0f172a] dark:shadow-[1px_1px_25px_#374151,_-1px_-1px_25px_#2e3338]  rounded  "><FaGithub /></a>
                            <a href="https://www.instagram.com/harveyy_0/" className="p-3 bg-white text-red-500 dark:text-[#db2777] shadow-lg dark:bg-[#0f172a] dark:shadow-[1px_1px_25px_#374151,_-1px_-1px_25px_#2e3338]  rounded  "><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Tombol Aksi Merah di Bawah (BARU) */}
                    <button 
                        className="w-full bg-red-600 dark:bg-[#db2777] dark:mt-2 text-white font-bold py-3 px-4 rounded-lg "
                        onClick={() => {
                            // Aksi saat tombol diklik, misalnya scroll ke contact dan tutup menu
                            window.location.href = '#contact';
                            setIsMenuOpen(false);
                        }}
                    >
                        LET'S TALK
                    </button>
                </div>
            </div>

            {/* Backdrop untuk overlay saat menu terbuka */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-30"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </>
    );
}