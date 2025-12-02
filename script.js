function kontak() {
    let nomorWA = "082260422459";
    let pesan = "Halo, saya lihat portofolio kamu";
    let link = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
    window.open(link, "_blank");
}