import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "Gizlilik — Cirofy",
  description: "Cirofy gizlilik özeti: hesap ve mağaza verilerinin korunması.",
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <div className="shell" style={{ paddingTop: 24 }}>
        <SiteHeader />
      </div>
      <article className="section">
        <div className="shell legal-doc">
          <h1>Gizlilik özeti</h1>
          <p className="legal-updated">Son güncelleme: 21 Eylül 2026</p>
          <p>
            Cirofy, pazaryeri kârlılık panelidir. Hesap, mağaza bağlantısı ve
            sipariş özetleri yalnızca hizmeti sunmak için işlenir.
          </p>
          <h2>Topladığımız veriler</h2>
          <ul>
            <li>Hesap: ad, e-posta, organizasyon adı</li>
            <li>Mağaza bağlantısı: mağaza kimliği ve erişim bilgileri (şifreli saklanır)</li>
            <li>Operasyon: ürün, sipariş, maliyet ve hakediş hesaplamaları</li>
          </ul>
          <h2>Kullanım amacı</h2>
          <p>
            Net kâr, hakediş ve kampanya öncesi filtreyi göstermek; hesabınızı
            yönetmek; güvenlik ve destek. Pazarlama için üçüncü taraflara satılmaz.
          </p>
          <h2>Saklama ve erişim</h2>
          <p>
            Veriler erişim kontrollü ortamda tutulur. Ürün yüzeyinde altyapı veya
            sağlayıcı ifşası yapılmaz. Destek taleplerinde yalnızca gerekli kadar
            erişilir.
          </p>
          <h2>Haklarınız</h2>
          <p>
            Hesap bilgilerinizi ayarlardan güncelleyebilir; silme veya erişim
            talebi için{" "}
            <a href="mailto:destek@cirofy.com">destek@cirofy.com</a> adresine
            yazabilirsiniz.
          </p>
          <p>
            Ayrıntılı KVKK metni: <a href="/kvkk">/kvkk</a>
          </p>
        </div>
      </article>
    </main>
  );
}
