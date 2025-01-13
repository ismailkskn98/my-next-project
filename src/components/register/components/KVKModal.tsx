import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KVKModal({ modalTitle }: { modalTitle: string }) {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger className="text-nowrap text-[10px] text-black underline underline-offset-4 mobileL:text-xs">
          {modalTitle}
        </DialogTrigger>
        <DialogContent>
          <Tabs defaultValue="membershipAgreement" className="w-full">
            <DialogHeader>
              <TabsList>
                <TabsTrigger value="membershipAgreement">
                  KVKK Aydınlatma Metni
                </TabsTrigger>
                <TabsTrigger value="kvkkAgreement">
                  Üyelik Sözleşmesi
                </TabsTrigger>
              </TabsList>
              <DialogDescription className="">
                <TabsContent value="membershipAgreement">
                  <ScrollArea className="mx-auto h-[400px] max-h-[450px] w-full rounded-md border p-4">
                    C1 COIN Üyelik Sözleşmesi Bu Üyelik Sözleşmesi
                    (&quot;Sözleşme&quot;), C1 COIN ile platforma üye olan
                    kullanıcı (&quot;Üye&quot;) arasında aşağıdaki hüküm ve
                    koşullara göre düzenlenmiştir. C1 COIN platformuna kayıt
                    olmakla, Üye bu Sözleşme&apos;yi kabul etmiş sayılır. 1.
                    TARAFLAR 1.1. C1 COIN: Şirket merkezi [şirket adresi]
                    adresinde bulunan C1 COIN şirketidir. 1.2. Üye: C1 COIN
                    platformuna üye olan ve işbu Sözleşme&apos;yi kabul eden
                    gerçek veya tüzel kişidir. 2. AMAÇ Bu Sözleşme&apos;nin
                    amacı, C1 COIN platformunun sağladığı hizmetlerden
                    Üye&apos;nin faydalanmasına ilişkin hüküm ve koşulları
                    belirlemektir. 3. HAK VE YÜKÜMLÜLÜKLER 3.1. C1 COIN&apos;in
                    Hak ve Yükümlülükleri: Üyelere kesintisiz ve güvenilir bir
                    hizmet sunmak için gerekli teknik altyapıyı sağlamak. Üye
                    bilgilerini yasal gereklilikler dışında gizli tutmak ve
                    üçüncü kişilerle paylaşmamak. 3.2. Üye&apos;nin Hak ve
                    Yükümlülükleri: Platforma kayıt sırasında doğru ve eksiksiz
                    bilgi vermek. C1 COIN platformunu yalnızca yasal ve etik
                    amaçlarla kullanmak. Üye, platform üzerinden yaptığı
                    işlemlerin ve kullandığı bilgilerin doğruluğundan
                    sorumludur. 4. GİZLİLİK Üye&apos;nin kişisel verileri, C1
                    COIN tarafından 6698 sayılı Kişisel Verilerin Korunması
                    Kanunu&apos;na (&quot;KVKK&quot;) uygun şekilde işlenir ve
                    saklanır. Daha fazla bilgi için KVKK Aydınlatma
                    Metni&apos;ni inceleyebilirsiniz. 5. SÖZLEŞME SÜRESİ VE
                    FESİH 5.1. İşbu Sözleşme, Üye&apos;nin platforma üye olması
                    ile yürürlüğe girer ve Üye&apos;nin üyeliğini sonlandırması
                    ile sona erer. 5.2. C1 COIN, Üye&apos;nin Sözleşme&apos;ye
                    aykırı davranması halinde üyeliği askıya alma veya
                    sonlandırma hakkına sahiptir. 6. UYUŞMAZLIKLARIN ÇÖZÜMÜ
                    Taraflar, bu Sözleşme&apos;den doğabilecek uyuşmazlıkları
                    öncelikle uzlaşma yoluyla çözmeyi taahhüt eder. Çözülemeyen
                    uyuşmazlıklar için Ankara Mahkemeleri ve İcra Daireleri
                    yetkilidir. 7. YÜRÜRLÜLÜK Bu Sözleşme, Üye tarafından
                    elektronik ortamda onaylandığı tarihten itibaren geçerlidir.
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="kvkkAgreement">
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4 sm:h-[500px]">
                    C1 COIN Kişisel Verilerin Korunması ve İşlenmesi Hakkında
                    Aydınlatma Metni C1 COIN olarak, kişisel verilerinizin
                    güvenliğine büyük önem veriyoruz. 6698 sayılı Kişisel ```tsx
                    Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
                    kişisel verilerinizi hangi amaçlarla işlediğimizi, koruma
                    yöntemler kapsamında aşağıdaki haklara sahipsiniz: Kişisel
                    verilerinizin işlenip işlenmediğini öğrenme. İşlenme amacını
                    ve amacına uygun kullanılıp kullanılmadığını öğrenme. Yanlış
                    veya eksik işlenen verilerin düzeltilmesini talep etme.
                    Kişisel verilerinizin silinmesini veya yok edilmesini talep
                    etme. İşlemenin kanuna aykırı olması halinde zararın
                    giderilmesini talep etme. 7. BAŞVURU YÖNTEMİ Kişisel
                    verilerinizle ilgili taleplerinizi, [şirket iletişim
                    bilgileri] adresine yazılı olarak iletebilirsiniz. 8.
                    YÜRÜRLÜLÜK Bu Aydınlatma Metni, C1 COIN tarafından
                    güncellenerek yayınlanabilir. En güncel versiyon, [şirket
                    web adresi] adresinde yayınlanacaktır.
                  </ScrollArea>
                </TabsContent>
              </DialogDescription>
            </DialogHeader>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
