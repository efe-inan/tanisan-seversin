// ============================================================================
// TANISAN SEVERSİN - SORU HAVUZU (QUESTIONS DATABASE)
// 2 Kişilik (Duo: 'benimle/ikimiz') ve Çoklu Oyuncu (Group: 'bu grupta/gruptan')
// Akıllı Dinamik Uyarlanabilir Soru Seti
// ============================================================================

const CATEGORIES = {
  "icebreaker": {
    "id": "icebreaker",
    "name": "Yeni Tanışma",
    "icon": "🧊",
    "tag": "Buz Kırıcı",
    "description": "Hafif, eğlenceli ve keyifli tanışma soruları",
    "theme": {
      "primary": "#06b6d4",
      "primaryDark": "#0891b2",
      "glow": "rgba(6, 182, 212, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #0e3a47 0%, #061820 100%)",
      "cardBg": "rgba(12, 38, 48, 0.85)",
      "badgeBg": "rgba(6, 182, 212, 0.15)",
      "badgeBorder": "rgba(6, 182, 212, 0.4)",
      "textColor": "#e0f2fe"
    },
    "questions": [
      "Hayatın boyunca yalnızca tek bir ülkeye seyahat etme hakkın olsaydı, nereyi seçerdin ve neden?",
      "Bugüne kadar tattığın en tuhaf ya da beklenmedik lezzet neydi?",
      "Sana sınırsız bütçeyle bir hobi edinme şansı verilseydi yarın neye başlardın?",
      "Günün en sevdiğin saati hangisi ve o saatte genelde ne yaparsın?",
      "Kendini tek bir film ya da dizi karakteriyle anlatman gerekseydi bu kim olurdu?",
      "Hiç beklemediğin bir anda hayatını kolaylaştıran en ilginç alışkanlığın ne?",
      "Bir müzik aletini bir gecede virtüöz derecesinde çalabilecek olsan hangisini seçerdin?",
      "Çocukken 'Büyüyünce kesin bunu yapacağım' deyip şu an hiç yapmadığın şey ne?",
      "Evinde çıkan yangında tüm canlılar güvendeyse kurtaracağın ilk 3 eşya ne olurdu?",
      "Zaman yolculuğu mümkün olsaydı; geçmişe gidip bir olaya tanıklık mı ederdin, geleceğe mi bakardın?",
      "Sabah uyandığında günün harika geçeceğini hissettiren en küçük detay nedir?",
      "İnsanların senin hakkında ilk bakışta yanıldığı en yaygın ön yargı nedir?",
      "Eğer bir kitap ya da podcast yazacak/yapacak olsan konusu ne olurdu?",
      "Sonsuza kadar sadece 3 çeşit yemek yiyebilecek olsan menün ne olurdu?",
      "Şu ana kadar katıldığın en unutulmaz konser ya da canlı etkinlik hangisiydi?",
      "Sence insanların mutlaka ölmeden önce deneyimlemesi gereken tek bir şey nedir?",
      "Hangi süper gücü seçerdin: Zihin okumak mı, görünmez olmak mı, ışınlanmak mı?",
      "Telefonundaki en çok kullandığın ama pek bilinmeyen uygulama hangisi?",
      "Hafta sonu için ideal kaçamağın: Issız bir dağ kulübesi mi, hareketli bir metropol mü?",
      "İzlemekten asla bıkmadığın, ezbere bildiğin o 'konfor filmi' hangisi?",
      "Bir yabancıyla konuşurken seni en çok etkileyen iletişim tarzı nasıldır?",
      "Şimdiye kadar aldığın en garip ya da en tatlı iltifat neydi?",
      "Kendi hayatının filmi çekilse soundtrack'inde mutlaka çalması gereken şarkı hangisi?",
      "Sosyal medyada karşına çıktığında izlemeden geçemediğin niş bir içerik türü var mı?",
      "Günün yorgunluğunu atmak için yaptığın vazgeçilmez mini ritüelin nedir?",
      "Eğer bir dili anında ana dilin gibi konuşabilecek olsaydın hangi dili seçerdin?",
      "Hiç kimsenin beğenmediği ama senin gizli gizli çok sevdiğin bir şarkı ya da film var mı?",
      "Bir adaya düşsen yanına alacağın tek bir kutu oyunu veya oyun ne olurdu?",
      "Şehir hayatının en çok sevdiğin ve en çok nefret ettiğin yanı nedir?",
      "Bugüne kadar aldığın en iyi hediye neydi ve kimden gelmişti?",
      "Yemek yapmayı bir sanat olarak mı görürsün, yoksa sadece karın doyurmak mı?",
      "Bir günlüğüne dünyaca ünlü birinin yerine geçebilseydin kimin gününü yaşamak isterdin?",
      "Kendi kendine kaldığında en çok ne düşünür veya hayal kurarsın?",
      "Hayatındaki en büyük şans ya da dönüm noktası olarak gördüğün tesadüf neydi?",
      "Koleksiyonunu yaptığın ya da biriktirmeye heves ettiğin bir şey var mı?",
      "Çocukluğunun geçtiği mahalle veya ev dendiğinde burnuna gelen ilk koku nedir?",
      "İlk maaşınla ya da kendi kazandığın ilk parayla ne satın almıştın?",
      "Hangi konuda saatlerce sıkılmadan bir konferans veya sunum yapabilirsin?",
      "En garip fobin ya da mantıksız bulduğun ama korktuğun şey nedir?",
      "Gittiğin bir mekanda atmosferi senin için mükemmel kılan şey nedir: Işık, müzik, koku?",
      "Herkesin çok övdüğü ama senin bir türlü sevemediğin popüler bir şey söyle.",
      "Hayatında aldığın ve 'iyi ki dinlemişim' dediğin en değerli tavsiye neydi?",
      "Bir sabah uyandığında hayvanlarla konuşabilseydin ilk hangi hayvanla sohbet ederdin?",
      "Kendini en yaratıcı ve üretken hissettiğin ortam nasıl bir yerdir?",
      "Şu an hayatında yeni bir sayfa açıyor olsan değiştireceğin ilk şey ne olurdu?",
      "Yolculuk yaparken en çok ne yapmaktan keyif alırsın: Müzik dinlemek, kitap okumak, manzarayı izlemek?",
      "Seni hiç tanımayan birine kendini tek bir cümleyle özetlemen gerekse ne derdin?",
      "Şu an cebindeki parayla hemen yarın kalkıp gidebileceğin bir bilet alsan nereye gidersin?",
      "En çok hangi tarihi dönemin modasını ve yaşam tarzını merak ediyorsun?",
      "Kendinde en çok beğendiğin ve geliştirmekten gurur duyduğun kişisel özelliğin ne?",
      "Gece kuşu musun yoksa sabah erken kalkanlardan mısın? Bu enerjini nasıl etkiliyor?",
      "Son zamanlarda duyduğun ve aklından çıkmayan en ilginç bilgi neydi?",
      "Bir restoranda sipariş verirken garantici misin yoksa her zaman maceracı mısın?",
      "Evcil bir hayvan besledin mi ya da beslemek istediğin sıra dışı bir canlı var mı?",
      "Arkadaşların seni bir kelimeyle tanımlayacak olsa bu kelime ne olurdu?",
      "Gelecekte teknolojinin çözeceğine en çok inandığın insanlık problemi nedir?",
      "Yağmurlu bir pazar gününü geçirmek için senin için en kusursuz senaryo nedir?",
      "Bir kafede otururken etraftaki insanları gözlemleyip hikayeler uydurur musun?",
      "Hayatında bir kez olsun yapıp 'bir daha asla' dediğin çılgınlık nedir?",
      "Gülme krizine girdiğin ve durduramadığın son anı hatırlıyor musun?",
      "Bir tablo ya da sanat eseri satın alacak olsan nasıl bir tarz seçerdin?",
      "Sence ilk tanışmada insanların en çok dikkat ettiği şey samimiyet mi, zeka mı, nezaket mi?",
      "Çocukken inandığın en komik ya da saçma batıl inanç neydi?",
      "Eğer bir bayram veya festival icat etme hakkın olsaydı neyi kutlardık?",
      "Şu anki yaşına gelene kadar öğrendiğin en net hayat dersi nedir?",
      "Sabah kahveni/çayını yaparken aklına gelen ilk şey ne olur?",
      "Tanımadığın birini hayatına almadan önce içgüdüsel olarak neye bakarsın?",
      "Şu an dinlediğin müziğin şarkısını ya da albümünü söyle; bu seçim seni ne anlatır?",
      "Hayatında 'ikinci şansa' inanan biri misin?",
      "Bir kafeye girince oturma yeri seçerken nelere dikkat edersin?",
      "Çevrendeki insanların gözlemlediğin ve 'bunu neden yapıyorlar?' dediğin bir alışkanlık var mı?",
      "Kendi geçmişine baktığında 'o dönem karakterimi en çok şekillendirdi' dediğin o tek yıl hangisi?",
      "En son ne zaman tamamen yabancı bir şeyi deneyip çok beğendiğin oldu?",
      "Bir şehirde sadece 24 saatin olsa ve o şehri hiç bilmesen ilk yapacağın şey ne?",
      "Seni bir kelimeyle tanımlayan ama sana göre eksik kalan o kelime nedir?",
      "Tatilde deniz mi dağ mı orman mı şehir mi — hangisinde kendinsen?",
      "Yaşlandıkça daha iyi hale geldiğini düşündüğün kişisel özelliğin ne?",
      "Sosyal medyası olmayan biri olsan hayatın nasıl değişirdi?",
      "En son ağlatan film, müzik veya kitap hangisiydi?",
      "Bugün sabah kahvaltında ne yedin? Bu tercih seni ne anlatır?",
      "Komşularınla ilişkin nasıl: Selam verip geçen mi, yoksa sohbet eden mi?",
      "Bir şeyi öğrenmek için kitap, video, deneyerek öğrenme — hangisi sana göre?",
      "Tatil sonrası eve dönerken içinde olan hissin adı ne?",
      "Telefona bakmadan tam bir gün geçirebilir misin?",
      "İnsanlarla ilk tanışırken ismini söyledikten sonra genellikle ne söylersin?",
      "Sinemada en çok hangi tür film seni salona bağlar?",
      "Kendini bir hayvanla özdeşleştirsen hangisi olurdun ve neden?",
      "Restoranda menüye bakmadan sipariş verir misin?",
      "Dünya nüfusu kadar para kazansan ilk harcaman ne olurdu?",
      "Şu an yanında taşıdığın ve vazgeçemediğin tek bir nesne nedir?",
      "Bir şehirde yaşamak zorunda olsan ama kendi şehrinden başka biri — nerede yaşardın?",
      "Gençliğine dönüp bir tavsiye verseydin ne derdin?",
      "Sabahları yüzüne sıçrayan suyun sıcaklığı mı soğukluğu mu?",
      "Şu an hayatında en çok vaktini neye harcıyorsun ve bu seni mutlu ediyor mu?",
      "Evinde misafir ağırlamayı mı seversin, yoksa dışarıda buluşmayı mı?",
      "Bir şeyi anlatırken kelimeler mi yetmez, yoksa sussun sessiz mi oturursun?",
      "Şu an elinde olmayan ama çok istediğin bir deneyim nedir?",
      "Seni tanıyan biri 'bu kesinlikle sen' diyerek paylaştığı son şey neydi?",
      "Çevrendeki insanların en çok sana sorduğu konu hangisi?",
      "Şimdiye kadar gördüğün en güzel gün batımı veya şafak neredeydi?",
      "Hayatında kendini en çok 'doğru yerdeyim' hissettiren an hangisiydi?",
      "Bir ülkeye emekli olmak için gidecek olsan nereyi seçerdin?",
      "Son bir haftada seni en çok güldüren an neydi?",
      "Kendi doğum günün için ideal kutlama nedir: Sürpriz mi, planlı mı, yalnız mı?",
      "Şu an tüm borçların silinse ve bir yıl boyunca istediğini yapabilsen ne yapardın?",
      "Bir şeyden vazgeçmekte zorlandığında kendini ne ile ikna edersin?",
      "Kişisel gelişim konusunda en etkili bulduğun yöntem nedir?",
      "Bir toplantıda ya da sohbette en çok kimin sözünü dinlersin?",
      "Hayatında hiç gerçekten yanlış zamanda yanlış yerde olduğunu hissettin mi?",
      "Şu an seni en çok heyecanlandıran ve beklediğin olay nedir?",
      "Birine güvenmekte ne kadar süren biri misin?",
      "Konfor alanından çıkmak için içinde ne kadar güçlü bir itmeye ihtiyaç duyarsın?",
      "Şu an dünyanın neresinde olmak isterdin?",
      "Gece uyumadan önce aklından geçen son düşünce genellikle ne olur?",
      "Şu an hayatına dahil etmek istediğin yeni bir alışkanlık nedir?",
      "Bugüne kadar aldığın en sürpriz karar ne oldu?",
      "Bir konuda hiç hata yapmadan ustalaşabilseydin bu ne olurdu?",
      "Kendine baktığında gördüğün ve diğerlerinin görmediği tarafın nedir?",
      "Şu an sessize alman gereken bir iç sesin olsa o ses ne söylüyor olurdu?",
      {
        "duo": "Benimle tanışmış olmanın hayatına ne katmasını umut edersin?",
        "group": "Bu masadaki insanlarla tanışmış olmanın hayatına ne katmasını umut edersin?"
      }
    ]
  },
  "friends": {
    "id": "friends",
    "name": "Arkadaşlar Arası",
    "icon": "👬",
    "tag": "Samimi & Dostluk",
    "description": "Arkadaş grubunu daha derin tanıyıp bağları güçlendirecek sorular",
    "theme": {
      "primary": "#f59e0b",
      "primaryDark": "#d97706",
      "glow": "rgba(245, 158, 11, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #451a03 0%, #1c0a00 100%)",
      "cardBg": "rgba(56, 25, 6, 0.85)",
      "badgeBg": "rgba(245, 158, 11, 0.15)",
      "badgeBorder": "rgba(245, 158, 11, 0.4)",
      "textColor": "#fef3c7"
    },
    "questions": [
      {
        "duo": "Seninle birlikteyken kendini en çok 'kendi gibi' hissettiğin an hangisiydi?",
        "group": "Bu gruptaki insanlarla birlikteyken kendini en çok 'kendi gibi' hissettiğin an hangisiydi?"
      },
      {
        "duo": "Benimle yaşadığın ve asla unutamadığın en absürt anı nedir?",
        "group": "Bu gruptan biriyle yaşadığın ve asla unutamadığın en absürt anı nedir?"
      },
      {
        "duo": "Eğer bir gün başın büyük bir belaya girse beni hemen arar mıydın, neden?",
        "group": "Eğer bir gün başın büyük bir belaya girse bu masadan ilk kimi ararsın ve neden?"
      },
      {
        "duo": "İkimiz hakkında dışarıdan birine bahsederken en çok hangi özelliğimizle övünürsün?",
        "group": "Bu arkadaş grubu hakkında dışarıdan birine bahsederken en çok hangi ortak özelliğimizle övünürsün?"
      },
      {
        "duo": "Arkadaşlığımız boyunca bana söylemek isteyip de doğru zamanı bulamadığın bir şey var mı?",
        "group": "Gruptan birini seç: Arkadaşlığınız boyunca ona söylemek isteyip de doğru zamanı bulamadığın bir şey var mı?"
      },
      {
        "duo": "İkimiz bir zombi istilasına yakalansak ilk hangimiz hayatta kalır, hangimiz feda edilir?",
        "group": "Bu grupta bir zombi istilası çıksa ilk kim hayatta kalır, ilk kim feda edilir?"
      },
      {
        "duo": "Benim en tahammül etmekte zorlandığın ya da 'yine başladı' dediğin huyum ne?",
        "group": "Gruptan birini seç: Onun en tahammül etmekte zorlandığın ya da 'yine başladı' dediğin huyu ne?"
      },
      {
        "duo": "Birlikte çıktığımız yolculuklar ya da yaptığımız planlar arasında senin için 1 numara hangisiydi?",
        "group": "Bu grupla çıktığın yolculuklar ya da yaptığınız planlar arasında senin için 1 numara hangisiydi?"
      },
      {
        "duo": "İkimizin ortak bir süper gücü olsaydı bu sence ne olurdu?",
        "group": "Gruptaki herkesin bir ortak süper gücü olsaydı bu ne olurdu?"
      },
      {
        "duo": "İkimiz bir şirket kuracak olsak ne satardık ve aramızda iş bölümü nasıl olurdu?",
        "group": "Eğer bu gruptan biriyle bir şirket kuracak olsan kimi ortak seçerdin ve ne satardınız?"
      },
      {
        "duo": "Benim hayatımda yaptığım en kötü veya en komik seçim sence neydi?",
        "group": "Gruptan birini seç: Onun hayatında yaptığı en kötü veya en komik seçim sence neydi?"
      },
      {
        "duo": "Zor bir dönemden geçerken benden gördüğün en unutulmaz destek neydi?",
        "group": "Zor bir dönemden geçerken bu gruptan veya bir arkadaşından aldığın en unutulmaz destek neydi?"
      },
      {
        "duo": "Benim aşk hayatım hakkında en çok eleştirdiğin şey nedir?",
        "group": "Grupta en çok kimin aşk hayatı kaotik ve kimin ilişki tavsiyelerine asla güvenilmez?"
      },
      {
        "duo": "Aramızdaki bağın zayıflamasından hiç endişelendiğin bir dönem oldu mu?",
        "group": "Bu gruptaki biriyle arandaki bağın zayıflamasından hiç endişelendiğin bir dönem oldu mu?"
      },
      {
        "duo": "Bana dışarıdan bakan birinin asla tahmin edemeyeceği bir özelliğimi söyler misin?",
        "group": "Gruptan birini seç: Dışarıdan bakan birinin onda asla tahmin edemeyeceği bir özelliğini söyle."
      },
      {
        "duo": "Eğer bir gün aniden zengin olursan bana ilk ne hediye alırdın?",
        "group": "Eğer bir gün birimiz aniden zengin olursa masadan ilk kime ne hediye almalı?"
      },
      {
        "duo": "Benim hakkımda ilk tanıştığımızda düşündüğün ama sonradan tamamen değişen fikrin neydi?",
        "group": "Gruptan birini seç: Onun hakkında ilk tanıştığınızda düşündüğün ama sonradan tamamen değişen fikrin neydi?"
      },
      {
        "duo": "Benimle sabaha kadar oturup dertleştiğin ve sana çok iyi gelen o geceyi anlatır mısın?",
        "group": "Gruptan biriyle sabaha kadar oturup dertleştiğin ve sana çok iyi gelen o geceyi anlatır mısın?"
      },
      {
        "duo": "Benim sır tutma becerime 10 üzerinden kaç puan verirsin?",
        "group": "Bu grupta en çok kimin sır tutma becerisine gözün kapalı güvenirsin?"
      },
      {
        "duo": "Eğer benim yerimde bir günlüğüne yaşasaydın hayatımda ilk neyi değiştirirdin?",
        "group": "Gruptan birini seç: Eğer onun yerinde bir günlüğüne yaşasaydın onun hayatında ilk neyi değiştirirdin?"
      },
      {
        "duo": "Beni bir film ya da dizi karakteriyle eşleştirecek olsan bu kim olurdu?",
        "group": "Solundaki kişiyi bir film ya da dizi karakteriyle eşleştirecek olsan bu kim olurdu?"
      },
      {
        "duo": "Aramızdaki en komik veya en saçma tartışma ne yüzünden çıkmıştı?",
        "group": "Bu gruptan biriyle yaşadığın en komik veya en saçma tartışma ne yüzünden çıkmıştı?"
      },
      {
        "duo": "Bana verdiğin ama unuttuğun ya da ertelediğin bir söz var mı?",
        "group": "Bu masadaki birine verdiğin ama unuttuğun ya da ertelediğin bir söz var mı?"
      },
      {
        "duo": "Benim hakkımda tek bir pozitif kelime söylemen gerekirse ne dersin?",
        "group": "Gruptaki herkes hakkında tek bir pozitif kelime söylemen gerekirse kim için ne dersin?"
      },
      {
        "duo": "Sence ikimizden hangimiz yaşlanınca daha huysuz bir dede/nine olacak?",
        "group": "Sence aramızda yaşlanınca en huysuz dede/nine kim olacak?"
      },
      {
        "duo": "Moralin çok bozukken seni en hızlı güldüren huyum ya da taktiğim nedir?",
        "group": "Senin moralin çok bozukken seni en hızlı güldüren gruptan kimdir?"
      },
      {
        "duo": "Benim hangi yeteneğime ya da özelliğime gizliden gizliye gıpta ediyorsun?",
        "group": "Hiç bu gruptan birini kıskandığın veya 'keşke onun gibi bir yeteneğim olsa' dediğin bir an oldu mu?"
      },
      {
        "duo": "İkimizin arkadaşlık dinamiğini en iyi anlatan tek bir şarkı seçsen hangisi olurdu?",
        "group": "Bu arkadaş grubunun ruhunu ve dinamiğini en iyi anlatan tek bir şarkı seçsen hangisi olurdu?"
      },
      {
        "duo": "Bana sormak isteyip de kırılacağımdan çekindiğin bir soru var mıydı?",
        "group": "Gruptan birini seç: Ona sormak isteyip de kırılmasından çekindiğin bir soru var mıydı?"
      },
      {
        "duo": "Bana borç para verirken hiç tereddüt eder misin?",
        "group": "Bu grupta en çok kime borç para verirken hiç düşünmezsin?"
      },
      {
        "duo": "Eğer bir gün farklı şehirlere veya ülkelere dağılsak ikimizin bağını ne korur?",
        "group": "Eğer bir gün hepimiz farklı şehirlere veya ülkelere dağılsak bu bağı ne korur?"
      },
      {
        "duo": "Benim en çok hangi başarımı kutladığında içtenlikle gurur duydun?",
        "group": "Gruptan birini seç: Onun en çok hangi başarısını kutladığında içtenlikle gurur duydun?"
      },
      {
        "duo": "Bana dert anlatırken kendini ne kadar rahat ve güvende hissediyorsun?",
        "group": "Gruptaki en iyi dert dinleyen ve insanı rahatlatan kişi sence kim?"
      },
      {
        "duo": "İkimizin birlikte yaptığı en rezil ama şu an gülerek anlattığımız olay neydi?",
        "group": "Bu gruptan biriyle yaptığınız en rezil ama şu an gülerek anlattığınız olay neydi?"
      },
      {
        "duo": "Benim flört veya ilişki tercihlerim hakkında dürüst bir eleştiri yap.",
        "group": "Gruptan birini seç: Onun flört veya ilişki tercihleri hakkında dürüst bir eleştiri yap."
      },
      {
        "duo": "Benimle 1 ay boyunca ıssız bir dağ evinde baş başa kalmaya katlanabilir misin?",
        "group": "Gruptan kiminle 1 ay boyunca ıssız bir dağ evinde baş başa kalmaya katlanabilirsin?"
      },
      {
        "duo": "Bana verdiğin ve sonradan 'keşke öyle demeseydim' dediğin bir tavsiye var mı?",
        "group": "Bu gruptan birine verdiğin ve sonradan 'keşke öyle demeseydim' dediğin bir tavsiye var mı?"
      },
      {
        "duo": "Benim duygularımı ne kadar dışa vurduğumu ya da içime attığımı düşünüyorsun?",
        "group": "Sence bu grupta duygularını en çok içine atan ve her şeyi içinde yaşayan kim?"
      },
      {
        "duo": "Senin gözünde bu arkadaşlığın yazılı olmayan en katı kuralı nedir?",
        "group": "Senin gözünde bu arkadaş grubunun yazılı olmayan en katı kuralı nedir?"
      },
      {
        "duo": "Benim hangi yeteneğimin veya potansiyelimin yeterince farkında olmadığımı düşünüyorsun?",
        "group": "Gruptan birini seç: Sence onun hangi yeteneğinin veya potansiyelinin yeterince farkında değil?"
      },
      {
        "duo": "Birlikte yediğimiz en efsane yemek ya da gittiğimiz en güzel mekan hangisiydi?",
        "group": "Bu grupla birlikte yediğiniz en efsane yemek ya da gittiğiniz en güzel mekan hangisiydi?"
      },
      {
        "duo": "Benim düğünümde en çok ne yapacağını hayal ediyorsun: Ağlamak mı, dans etmek mi?",
        "group": "Gruptan birinin düğününde en çok ağlayacak ve pistte en çılgınca dans edecek kişi kim olur?"
      },
      {
        "duo": "Benimle ilgili öğrendiğinde seni en çok şaşırtan gerçek neydi?",
        "group": "Gruptan birini seç: Onunla ilgili öğrendiğinde seni en çok şaşırtan gerçek neydi?"
      },
      {
        "duo": "İkimiz büyük bir müze soygunu planlasak rollerimiz tam olarak ne olurdu?",
        "group": "Bu grupla büyük bir müze soygunu planlasanız herkesin takımdaki rolü ne olurdu?"
      },
      {
        "duo": "Benim senin için yaptığım ve seni en çok duygulandıran küçük jest neydi?",
        "group": "Bu masadaki birinin senin için yaptığı ve seni en çok duygulandıran jest neydi?"
      },
      {
        "duo": "Benden tek bir karakteristik özellik çalma hakkın olsa neyi alırdın?",
        "group": "Gruptaki kişilerden birer karakteristik özellik çalma hakkın olsa kimden neyi alırdın?"
      },
      {
        "duo": "Bana söylemek istediğin ama bugüne kadar ertelediğin içten bir teşekkür var mı?",
        "group": "Gruptan birini seç: Ona söylemek istediğin ama bugüne kadar ertelediğin içten bir teşekkür var mı?"
      },
      {
        "duo": "Sence ikimiz 10 yıl sonra nerede, nasıl bir hayat yaşıyor olacağız?",
        "group": "Sence bu arkadaş grubu 10 yıl sonra nerede, nasıl bir hayat yaşıyor olacak?"
      },
      {
        "duo": "İkimiz arasında sence hangimiz daha çok mantığıyla, hangimiz duygularıyla hareket eder?",
        "group": "Aramızdaki en 'katı mantık insanı' ve en 'duygusal karar veren' kim?"
      },
      {
        "duo": "Benim hayatımdaki en büyük dönüm noktasına şahit olduğun an hangisiydi?",
        "group": "Gruptan birini seç: Onun hayatındaki en büyük dönüm noktasına şahit olduğun an hangisiydi?"
      },
      "Bu grupta dedikodu yaparken en çok kimin hayat kararları adına endişeleniyoruz?",
      {
        "duo": "Aramızda dönen en komik içeriden espri veya bana taktığın lakap nedir?",
        "group": "Bu grupta takılan en komik lakap ya da aramızda dönen en komik içeriden espri nedir?"
      },
      "Senin için 'gerçek dost' tanımını bu arkadaşlıkta en çok hissettiren davranış ne oldu?",
      {
        "duo": "Benimle baş başa vakit geçirmek ile kalabalık bir ortamda olmak arasındaki fark nedir?",
        "group": "Gruptan birini seç: Onunla baş başa vakit geçirmek ile kalabalık bir ortamda olmak arasındaki fark nedir?"
      },
      "Sence bu grupta en çabuk gaza gelen ve çılgınca fikirler ortaya atan kim?",
      "Bir gün bu arkadaşlığın maceralarını anlatan bir kitap yazılsa başlığı ne olurdu?",
      {
        "duo": "Beni hayatta en çok neyin öfkelendirdiğini ya da üzdüğünü biliyor musun?",
        "group": "Sağındaki kişiye dön: Sence onu hayatta en çok ne öfkelendirir ya da üzer?"
      },
      "Benim ailemle veya ebeveynlerimle aran nasıl?",
      {
        "duo": "Bana en son ne zaman sımsıkı sarıldın ve o an ne hissettin?",
        "group": "Bu gruptan birine en son ne zaman sımsıkı sarıldın ve o an ne hissettin?"
      },
      {
        "duo": "Bana karşı hiç haksızlık yaptığını düşünüp sonradan vicdan azabı çektiğin oldu mu?",
        "group": "Gruptan birine karşı hiç haksızlık yaptığını düşünüp sonradan vicdan azabı çektiğin oldu mu?"
      },
      "Sence bu ortamda giyim tarzını veya zevkini en çok beğendiğin kişi kim?",
      {
        "duo": "Bende değiştirmemi ASLA istemeyeceğin en karakteristik huyum nedir?",
        "group": "Gruptan birini seç: Onda değiştirmesini ASLA istemeyeceğin en karakteristik huyu nedir?"
      },
      "Birlikte yaptığımız ve gelenekselleşmesini en çok istediğin aktivite nedir?",
      {
        "duo": "Ben hayatında hiç olmasaydım sence bugün nasıl bir insan olurdun?",
        "group": "Bu arkadaş grubu hayatında hiç olmasaydı sence bugün nasıl bir insan olurdun?"
      },
      {
        "duo": "Şu an bana içinden gelen en samimi, filtresiz cümleyi kurar mısın?",
        "group": "Şu an bu masada oturan herkese içinden gelen en samimi, filtresiz cümleyi kurar mısın?"
      },
      {
        "duo": "Benim hakkımda sosyal medyada paylaşmak isteyip de vazgeçtiğin bir fotoğraf var mı?",
        "group": "Gruptan biri hakkında sosyal medyada paylaşmak isteyip de vazgeçtiğin bir fotoğraf var mı?"
      },
      "Benim hakkımda bildiğin en gizemli sırrı başkası da biliyor mu?",
      {
        "duo": "Benimle hiç konuşmadan saatlerce sessizce oturduğun huzurlu bir anı hatırlıyor musun?",
        "group": "Gruptan biriyle hiç konuşmadan saatlerce sessizce oturduğun huzurlu bir anı hatırlıyor musun?"
      },
      {
        "duo": "Benim için gözünü kırpmadan yapabileceğin en büyük fedakarlık nedir?",
        "group": "Bu masadaki en yakın arkadaşın için gözünü kırpmadan yapabileceğin en büyük fedakarlık nedir?"
      },
      "Benim kariyer veya eğitim tercihim seni hiç şaşırtmış mıydı?",
      "Bu arkadaşlığın içinde en çok hangi anlarda 'iyi ki varsın' diyorsun?",
      {
        "duo": "Bana dair aklında taşıdığın ve merak ettiğin o tek soruyu şimdi sor.",
        "group": "Gruptan birini seç ve aklında taşıdığın merak ettiğin bir soruyu doğrudan ona sor."
      },
      "Benim evime taşınmak zorunda kalsan ne kadar süre sorunsuz geçinebilirdik?",
      {
        "duo": "Bana hiç hissettirmeden yaptığın en güzel iyilik neydi?",
        "group": "Gruptan birine ona hiç hissettirmeden yaptığın en güzel iyilik neydi?"
      },
      {
        "duo": "Sence ikimizin arkadaşlığındaki en belirgin ortak zayıflık nedir?",
        "group": "Sence bu arkadaş grubunun en belirgin ortak zayıflığı nedir?"
      },
      {
        "duo": "İkimiz planlayıp son anda iptal ettiğimiz en efsane buluşma hangisiydi?",
        "group": "Bu grupla planlayıp son anda iptal edilen en efsane buluşma hangisiydi?"
      },
      {
        "duo": "Gözlerimin içine bakarak kalbimi ısıtacak içten bir cümle söyle.",
        "group": "{target} adlı oyuncunun gözlerinin içine bakarak kalbini ısıtacak içten bir cümle söyle."
      },
      "Davranışlarını en çok çözemediğin ama sevmeye devam ettiğin arkadaşın kim?",
      {
        "duo": "İkimizin yaptığı ve sence değeri bilinmeyen o küçük tatlı gelenekler neler?",
        "group": "Bu grupla yaptığınız ve sence değeri bilinmeyen o küçük tatlı gelenekler neler?"
      },
      {
        "duo": "Benden beklediğin ama bir türlü açıkça dile getirmediğin bir ilgi ya da davranış var mı?",
        "group": "Gruptan birinden beklediğin ama bir türlü açıkça dile getirmediğin bir ilgi ya da davranış var mı?"
      },
      {
        "duo": "Benimle en uzun süre kırgın veya küs kaldığın o süreci anlatır mısın?",
        "group": "Gruptan biriyle en uzun süre kırgın veya küs kaldığın o süreci anlatır mısın?"
      },
      "Şu an bu masanın yaydığı enerjiyi tek bir kelimeyle tanımla.",
      {
        "duo": "Beni diğer tüm arkadaşlarından ayıran en belirgin fark nedir?",
        "group": "Solundaki kişiye dön: Onu diğer tüm arkadaşlarından ayıran en belirgin fark nedir?"
      },
      "Kriz anında en sakin kalan ve mantıklı düşünen taraf hangimiz oluruz?",
      {
        "duo": "İkimizin birlikte kahkaha krizine girdiği ve şu an bile gülümseten o olay nedir?",
        "group": "Bu grupla birlikte kahkaha krizine girdiğin ve şu an bile gülümseten o olay nedir?"
      },
      {
        "duo": "Sence benimle olan bu dostluğun olmasaydı hayatında en çok neyin eksikliğini hissederdin?",
        "group": "Sence bu masadaki dostluklar olmasaydı hayatında en çok neyin eksikliğini hissederdin?"
      },
      {
        "duo": "Benim hakkımda 'bu insan kesinlikle büyük işler yapacak' dediğin an neydi?",
        "group": "{target} adlı oyuncuya bakarak söyle: Onun hakkında 'bu insan kesinlikle büyük işler yapacak' dediğin an neydi?"
      },
      "Son yıllarda bende en çok hangi değişimi fark ettin ve bu değişim nasıl oldu?",
      {
        "duo": "İkimiz ıssız bir ormanda kaybolsak hangimiz hayatta kalmayı sağlar, hangimiz panikler?",
        "group": "Bu grupla ıssız bir ormanda kaybolsanız kim hayatta kalmayı sağlar, kim panik yaratır?"
      },
      {
        "duo": "Benimle olan bu arkadaşlık seni bir insan olarak en çok nasıl büyüttü ve olgunlaştırdı?",
        "group": "Bu gruptaki arkadaşlıklar seni bir insan olarak en çok nasıl büyüttü ve olgunlaştırdı?"
      },
      {
        "duo": "Benim hakkımda bugüne kadar dile getirmediğin takdir dolu bir gözlemini söyle.",
        "group": "Sağındaki kişiye dön: Onun hakkında bugüne kadar dile getirmediğin takdir dolu bir gözlemini söyle."
      },
      "Ortamdaki gerginliği en hızlı dağıtan hareketim sence hangisi?",
      {
        "duo": "Benimle geçirdiğin güzel bir günün sonunda eve dönerken genellikle ne hissedersin?",
        "group": "Bu grupla geçirdiğin güzel bir günün sonunda eve dönerken genellikle ne hissedersin?"
      },
      {
        "duo": "Bana gerçekten içtenlikle teşekkür borçlu olduğunu hissettiğin bir an var mı?",
        "group": "Bu masada oturan insanlara gerçekten içtenlikle teşekkür borçlu olduğun bir an var mı?"
      },
      "Gözlerini kapatsan ses tonumdan ve hangi favori kelimemden beni hemen tanırsın?",
      {
        "duo": "İkimiz aynı eve taşınsaydık kim hangi odayı kapar ve hangi ev işini asla yapmazdı?",
        "group": "Bu grupla aynı eve taşınsaydınız kim hangi odayı kapar ve hangi ev işini asla yapmazdı?"
      },
      "Bana dürüstçe sormak ve cevabını almak istediğin o tek soru ne olurdu?",
      {
        "duo": "Şu an sadece benim kulağıma fısıldamak istediğin küçük ve tatlı bir sır söyle.",
        "group": "Gruptan birini seç: Sadece onun kulağına fısıldamak istediğin küçük ve tatlı bir sır söyle."
      }
    ]
  },
  "flirt": {
    "id": "flirt",
    "name": "Flört & İlk Buluşma",
    "icon": "💘",
    "tag": "Romantik & Çekim",
    "description": "İki insan arasındaki kıvılcımı tutuşturan, romantik ve merak uyandırıcı sorular",
    "theme": {
      "primary": "#ec4899",
      "primaryDark": "#db2777",
      "glow": "rgba(236, 72, 153, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #500724 0%, #1f020d 100%)",
      "cardBg": "rgba(64, 8, 30, 0.85)",
      "badgeBg": "rgba(236, 72, 153, 0.15)",
      "badgeBorder": "rgba(236, 72, 153, 0.4)",
      "textColor": "#fce7f3"
    },
    "questions": [
      {
        "duo": "Beni ilk gördüğün ya da ilk konuştuğumuz an aklından geçen ilk düşünce neydi?",
        "group": "Masadan birini seç (veya karşındakine dön): Onu ilk gördüğün ya da ilk konuştuğunuz an aklından geçen ilk izlenim neydi?"
      },
      "Bir insanda seni ilk 5 dakikada en çok etkileyen şey nedir: Ses tonu, bakışlar, espri anlayışı?",
      "Senin için 'mükemmel bir ilk randevu' senaryosu nasıl başlar ve nasıl biter?",
      "Aşkta kadere ve tesadüflere inanır mısın, yoksa her şey seçimlerden mi ibarettir?",
      "Bir ilişkide olmazsa olmaz dediğin, asla taviz veremeyeceğin 3 değer nedir?",
      "Karşındaki insanın senden gerçekten hoşlandığını en net nasıl anlarsın?",
      "Flört ederken cesur ve açık sözlü müsün yoksa ağırdan alıp karşı tarafı mı beklersin?",
      {
        "duo": "Bende dikkatini çeken en sempatik veya çekici detay nedir?",
        "group": "Masadan birini seç (veya karşındakine dön): Onda dikkatini çeken en sempatik veya çekici detay nedir?"
      },
      "Sence bir ilişkide tutku mu daha önemlidir yoksa huzur ve güven mi?",
      "Aşkını gösterme dilin hangisidir: Sözler, hediyeler, fiziksel temas, kaliteli zaman, yardım etmek?",
      "Hiç birine ilk görüşte aşık oldun mu yoksa tanıdıkça mı kalbin ısınır?",
      "Senin kalbini çalmanın en kestirme ve garantili yolu nedir?",
      "Bir ilişkide en çok korktuğun şey nedir: Bağlanmak, terk edilmek, monotonlaşmak?",
      "Şu ana kadar yaptığın ya da sana yapılan en romantik jest neydi?",
      {
        "duo": "Gözlerimin içine 5 saniye bak: O an içinde ne hissettin: Merak mı, heyecan mı, tebessüm mü?",
        "group": "Masadan birini seç ve 5 saniye göz teması kur: O an içinde ne hissettin: Merak mı, heyecan mı, tebessüm mü?"
      },
      "Bir erkekte/kadında 'red flag' olarak gördüğün ilk davranış nedir?",
      "Sence bir çiftin birlikte yapabileceği en eğlenceli ve bağ kurucu aktivite nedir?",
      "Geçmiş ilişkilerinden öğrendiğin en büyük hayat ve ilişki dersi ne oldu?",
      "Sabah sevgilinin yanında uyanıp ilk ne yapmak istersin?",
      "Karşındaki kişinin zekası ve mizah yeteneği senin için ne kadar çekici?",
      {
        "duo": "Benimle yağmurlu bir gecede baş başa kalsan ne yapmak isterdin?",
        "group": "Hoşlandığın kişiyle yağmurlu bir gecede baş başa kalsan ne yapmak isterdin?"
      },
      "Eski sevgililerinle arkadaş kalabilenlerden misin, yoksa tamamen silenlerden mi?",
      {
        "duo": "Beni daha yakından tanımak için sorabileceğin tek bir soru hakkın olsa ne sorardın?",
        "group": "Masadan birini seç: Onu daha yakından tanımak için sorabileceğin tek bir soru hakkın olsa ne sorardın?"
      },
      "Bir ilişkide kıskançlık sence sevgi göstergesi midir yoksa özgüvensizlik mi?",
      {
        "duo": "Benimle plansız bir gece yarısı yolculuğuna çıksan nereye sürmek isterdin?",
        "group": "Masadan birini seç: Onunla plansız bir gece yarısı yolculuğuna çıksan nereye sürmek isterdin?"
      },
      "Bir insanda 'aura' ve çekim sence neyle oluşur?",
      "Romantik bir anı ölümsüzleştirmek için çalacağın o kusursuz şarkı hangisi olurdu?",
      "Aşk acısı çekerken nasıl birine dönüşürsün: İçe kapanan mı, dışarı vuran mı?",
      "Sence karşı cinste en çekici giyim tarzı veya detay nedir?",
      "İlk buluşmada hesabı paylaşmak mı, bir tarafın ödemesi mi? Tavrın nedir?",
      {
        "duo": "Beni güldürmek için nasıl bir taktik uygulardın?",
        "group": "Masadan birini (veya hoşlandığın birini) güldürmek için nasıl bir taktik uygulardın?"
      },
      "Bir ilişkide kendi alanına ve yalnız kalma ihtiyacına ne kadar önem verirsin?",
      "Hiç birine açılmaktan korkup duygularını içine gömdüğün oldu mu?",
      "Sence bir ilişkide heyecan ve flörtözlük yıllar geçse de korunabilir mi?",
      "Birlikte bir hafta sonu tatiline kaçacak olsak nasıl bir rota hayal edersin?",
      "Karşı tarafın hangi küçük jesti seni anında etkiler?",
      "Karakterinde aşık olunduğunda katlanılması en zor olan yanın nedir?",
      "Bir ilişkide en çok ne zaman kendini güvende ve değerli hissedersin?",
      {
        "duo": "Sence ikimizin enerjisi ve uyumu 10 üzerinden kaç?",
        "group": "Solundaki kişiye dön ve sor: 'Sence seninle enerjimiz ve uyumumuz 10 üzerinden kaç?'"
      },
      {
        "duo": "Bana şu an aklından geçen tatlı ve dürüst bir iltifat et.",
        "group": "{target} adlı oyuncuya dönerek söyle: Onda dikkatini çeken en sempatik veya tatlı özellik nedir?"
      },
      "Flörtleşirken mesajlaşmayı mı seversin yoksa saatlerce telefonda konuşmayı mı?",
      "Bir ilişkide sırların olmalı mıdır yoksa tam şeffaflık mı gerekir?",
      "İlk öpüşmede mekan ve anın büyüsü senin için ne kadar önemlidir?",
      {
        "duo": "Benim hakkımda bu akşam öğrendiğin en tatlı ya da ilginç detay nedir?",
        "group": "Masadan birini seç: Onun hakkında bu akşam öğrendiğin en tatlı ya da ilginç detay nedir?"
      },
      {
        "duo": "İkimiz tüm telefonları kapatıp 24 saat baş başa kalsak günümüz nasıl geçerdi?",
        "group": "Hoşlandığın biriyle tüm telefonları kapatıp 24 saat baş başa kalsan gününüz nasıl geçerdi?"
      },
      "Aşk için hayatında neleri feda edebileceğini düşünürsün?",
      "Sence zıt kutuplar mı birbirini çeker yoksa birbirine benzeyen insanlar mı?",
      "Bir ilişkide tartışmaların yapıcı olması için altın kuralın nedir?",
      "Şu an hayatında yeni bir aşka ve derin bir bağa ne kadar hazırsın?",
      {
        "duo": "Bana sarılsan nasıl bir sarılma olurdu: Sıcak ve uzun bir sarılma mı, enerjik ve samimi bir kucaklaşma mı?",
        "group": "Karşındaki kişiye sarılsan nasıl bir sarılma olurdu: Sıcak ve uzun bir sarılma mı, enerjik ve samimi bir kucaklaşma mı?"
      },
      "En çok hangi kelimeleri sevgilinin ağzından duymak içini eritir?",
      "Gelecekteki partnerinde en çok hangi hayat arkadaşlığı özelliğini ararsın?",
      {
        "duo": "İkimiz mutfağa girip yemek yapsak romantizm mi çıkar yoksa tatlı bir kaos mu?",
        "group": "Biriyle mutfağa girip yemek yaparken romantizm mi çıkar yoksa tatlı bir kaos mu?"
      },
      {
        "duo": "Bana baktığında sana gizemli ya da henüz keşfedilmemiş gelen tarafım nedir?",
        "group": "Masadan birini seç: Onda sana gizemli ya da henüz keşfedilmemiş gelen tarafı nedir?"
      },
      "Aşkın sence bir ömrü var mıdır yoksa zamanla derin bir sevgiye mi evrilir?",
      "Biriyle buluşmaya hazırlanırken en çok neye özen gösterirsin: Koku, kıyafet, saç?",
      "Bugüne kadar yaşadığın en tatlı ya da en komik flört gafı neydi?",
      "Senin için 'o doğru kişi' hissini veren en belirgin işaret nedir?",
      "Biriyle gün batımını izleyecek olsan nerede oturuyor olmak isterdin?",
      "Duygusal olarak kırılgan olduğunu karşındakine ne zaman gösterirsin?",
      {
        "duo": "Benim ses tonum ve konuşma tarzım hakkında ne düşünüyorsun?",
        "group": "Sağındaki kişiye dön: Onun ses tonu ve konuşma tarzı hakkında ne düşünüyorsun?"
      },
      "İlişkide hediyeleşmek senin için ne ifade eder: Maneviyat mı, düşünülmüş olmak mı?",
      "Bir ilişkide iki insanın birbirine verebileceği en güzel söz ne olabilirdi?",
      {
        "duo": "Bu buluşmanın sonunda benden neyi hatırlamak istersin?",
        "group": "Bu gecenin sonunda bu masadaki insanların senin hakkında neyi hatırlamasını istersin?"
      },
      "Sence bir ilişkide 'doğru zamanlama' ne kadar belirleyicidir?",
      "Birine ilk mesajı atmak mı daha zor, yoksa ilk defa 'seni seviyorum' demek mi?",
      "Bir partnerin seni en çok ne zaman 'bu insan benim için yaratılmış' hissettirir?",
      "Hayatında şu ana kadar kaç kez gerçek anlamda aşık oldun?",
      "Sence iyi bir ilişkinin en temel yapı taşı nedir?",
      "Karşındaki kişinin gözlerine baktığında ne tür bir duygu ararsın?",
      "İlk buluşmada konuşurken en çok hangi konunun açılmasından hoşlanırsın?",
      {
        "duo": "Şu an gözlerime bak ve söyle: Benden tam olarak nasıl bir enerji hissediyorsun?",
        "group": "Karşındaki kişiye bakarak söyle: Şu an onun enerjisinden ne hissediyorsun?"
      },
      "Bir ilişkide en çok hangi kırılma anları seni derinden sarsar?",
      "Biriyle bağ kurmanın önündeki en büyük engelini ne olarak görüyorsun?",
      "Bir ilişkide sana göre 'romantizm' tam olarak ne anlama gelir?",
      "Şu an hayatında yanında olmak istediğin özel biri var mı?",
      "Seninle ciddi olmak isteyen biri sana bunu en net nasıl göstermelidir?",
      "Sevginin en güzel dile geldiği an sence nedir?",
      "Bir ilişki başlamadan önce sence ne kadar süre tanışmak gerekir?",
      "Karşındaki kişiyle arandaki kimyayı en çok hangi anlarda hissedersin?",
      "Seni en çok etkileyen his: Biri tarafından görülmek mi, anlaşılmak mı, arzulanmak mı?",
      "Biri seni etkilemek istese nereden yola çıkmalıdır?",
      "Şu an hayatında özel biri olsaydı, bu akşam onunla ne yapıyor olurdun?",
      "Kendini en çok ne zaman sevilmeye layık ve değerli hissedersin?",
      "Bir ilişkide 'kaliteli zaman' senin için ne anlama gelir?",
      "Şimdiye kadar yaptığın en cesur romantik hareket neydi?",
      "Birine yakın hissetmek için en çok neye ihtiyaç duyarsın?",
      "Aşkı anlatmak için bir renk seçsen hangisi olurdu?",
      "İlk öpücük mü, ilk 'seni seviyorum' mu — hangisi kalbinde daha değerlidir?",
      {
        "duo": "Bana gizli bir hayran mektubu yazacak olsan ilk cümlen ne olurdu?",
        "group": "Bu masada oturan birine gizli bir hayran mektubu yazacak olsan ilk cümlen ne olurdu?"
      },
      "Sevgi ve bağlılık arasındaki en önemli fark sence nedir?",
      "Seni ilk anda etkileyen ses tonu ve gülüş hakkında ne düşünüyorsun?",
      "Bir ilişkide 'sabırsızlıkla beklenen an' sence hangisi olmalıdır?",
      {
        "duo": "Benim hakkımda içinde hissettiğin ama bugüne kadar dile getirmediğin bir iltifat söyle.",
        "group": "Masadan birine bak: Onun hakkında içinde hissettiğin ama bugüne kadar dile getirmediğin bir iltifat söyle."
      },
      {
        "duo": "İkimizin bu akşam geçirdiği anı tek bir kelimeyle özetlesen bu ne olurdu?",
        "group": "Bu masada birlikte geçirilen bu anı tek bir kelimeyle özetlesen bu ne olurdu?"
      }
    ]
  },
  "family": {
    "id": "family",
    "name": "Aile",
    "icon": "👨‍👩‍👧",
    "tag": "Sıcak & Ailevi",
    "description": "Aile üyeleri, ebeveynler ve kardeşler için derin, saygılı ve nostaljik sorular",
    "theme": {
      "primary": "#d97706",
      "primaryDark": "#b45309",
      "glow": "rgba(217, 119, 6, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #3c1b0c 0%, #170902 100%)",
      "cardBg": "rgba(53, 23, 10, 0.85)",
      "badgeBg": "rgba(217, 119, 6, 0.15)",
      "badgeBorder": "rgba(217, 119, 6, 0.4)",
      "textColor": "#ffedd5"
    },
    "questions": [
      "Çocukluğundan ya da aile geçmişinden aklında kalan en sıcak, en mutlu anı hangisi?",
      {
        "duo": "Benimle ilgili içinde biriktirdiğin ve gurur duyduğun bir özelliğimi ya da davranışımı söyler misin?",
        "group": "Masadan bir aile üyesini (veya birini) seç: Onunla ilgili içinde biriktirdiğin ve gurur duyduğun bir özelliği/davranışı söyle."
      },
      "Ailemizde nesilden nesile aktarılmasını en çok istediğin güzel gelenek nedir?",
      "Çocukken yaptığın ve aileni hem çok korkutan hem de şu an güldüren en büyük yaramazlığın neydi?",
      "Ailemizde değişmesini, daha modern ya da daha anlayışlı olmasını dilediğin bir kural var mı?",
      "Kendi karakterinin hangi özelliğini anneye, hangisini babaya daha çok benzetiyorsun?",
      "Zor zamanlarımızda ailemizin kenetlenip atlattığı ve seni duygulandıran bir anı var mı?",
      "Büyürken ailene ya da büyüklerine yeterince söyleyemediğin ama hak ettikleri bir teşekkür var mı?",
      "Aile sofralarımız dendiğinde aklına gelen ilk yemek ve o masadaki kahkaha nedir?",
      {
        "duo": "Benim geleceğimle ilgili en büyük hayalin ve temennin nedir?",
        "group": "Masadan birini seç: Onun geleceğiyle ilgili en büyük hayalin ve temennin nedir?"
      },
      "Geçmişe dönebilseydin aile olarak birlikte daha fazla ne yapmayı isterdin?",
      "Ailende görüp 'tıpkı bana çekmiş' ya da 'tıpkı ona çekmişim' dediğin bir alışkanlık veya huy var mı?",
      "Ailenden aldığın ve hayatın boyunca sana rehberlik ettiğine inandığın en değerli hayat dersi nedir?",
      "Ailen için yaptığın ya da ailenin senin için yaptığı en büyük fedakarlık neydi?",
      "Çocukluğunda ailenle geçirdiğin en keyifli, en unutulmaz gün hangisiydi?",
      "Ailemizin en bilge ve her konuda danışılacak kişisi sence kim?",
      "Ailenin başlangıçta onaylamayıp sonradan 'iyi ki yapmışsın' dediği bir başarın veya kararın oldu mu?",
      "Bayram sabahları ya da özel günlerdeki o eski telaşı özlüyor musun? En çok nesi aklında?",
      "Sence ailede çocuk yetiştirirken ya da bir gence rehberlik ederken yaşanan en zorlayıcı dönem hangisi?",
      "Aile içinde birbirimize çok daha sık söylememiz gereken o cümle sence nedir?",
      "Kendi anne-babanın çocuk yetiştirme tarzıyla kıyaslandığında kendi hayatında neyi farklı yapıyorsun/yapardın?",
      "Ailenin geçmişine dair duyduğun en ilginç, şaşırtıcı ya da komik hikaye nedir?",
      {
        "duo": "Bende en çok hayran olduğun ve gıpta ettiğin kişisel güç nedir?",
        "group": "Masadan birini seç: Onda en çok hayran olduğun ve gıpta ettiğin kişisel güç nedir?"
      },
      "Ailemizde en çok kimin esprilerine gülünür ve masanın neşesi kimdir?",
      "Kendi ayakların üzerinde tek başına durabildiğini ailene ve kendine ilk ne zaman kanıtladın?",
      "Ailece çıktığınız o eski tatillerden aklında kalan en canlı ve nostaljik kare nedir?",
      "Ailenden birinin sana hediye ettiği ve gözün gibi sakladığın en manevi eşya hangisi?",
      "Aileden birine kırıldığın ama 'o daha genç/çocuk' ya da 'o benim büyüğüm' deyip içine attığın bir an oldu mu?",
      "Bizim ailemizi diğer ailelerden ayıran en belirgin ve güzel fark nedir?",
      "Geleceğe ve sonraki nesillere bu aileden taşınmasını en çok istediğin temel değer nedir?",
      "Senin gençlik yıllarında hayal ettiğin hayatla şu anki hayatın arasında en tatlı fark ne?",
      "Bu masadaki aile üyeleriyle birlikte sustuğunuzda bile o huzurlu bağı hissedebiliyor musun?",
      {
        "duo": "Benim hakkımda başkalarına anlatırken gözlerinin parlamasına sebep olan özelliğim nedir?",
        "group": "Masadan birini seç: Onun hakkında başkalarına anlatırken gözlerinin parlamasına sebep olan başarı/özellik nedir?"
      },
      "Eski fotoğraf albümlerine baktığında seni en çok duygulandıran fotoğraf hangisi?",
      "Ailenden birine haksız yere öfkelendiğini düşünüp sonradan vicdan azabı çektiğin oldu mu?",
      "Evimizde her zaman çalmasını istediğin o nostaljik şarkı hangisi?",
      {
        "duo": "Benden öğrenip kendi hayatına kattığın küçük bir bakış açısı veya alışkanlık var mı?",
        "group": "Masadan birini seç: Ondan öğrenip kendi hayatına kattığın küçük bir bakış açısı veya alışkanlık var mı?"
      },
      "Kardeşler/aile bireyleri arasındaki dayanışmayı en güçlü hissettiğin gün neydi?",
      "Kendi çocukluğunla şimdiki gençlerin çocukluğunu kıyasladığında en çok neye imreniyorsun?",
      "Ailene sımsıkı sarıldığında hissettiğin o saf güven duygusunu tek kelimeyle anlat.",
      "Ailemizin büyüklerinden duyduğun ve kulağına küpe olan bir atasözü/nasihat var mı?",
      "Ailenle bugüne kadar hiç denemediğin ama birlikte mutlaka yapmak istediğin bir aktivite nedir?",
      "Hangi yemek piştiğinde ya da kokusunu duyduğunda sana anında gerçek bir yuvada olduğunu hissettiriyor?",
      "Kendi çocukluğunun hangi yaşına geri dönüp o küçük çocuğa sımsıkı sarılmak isterdin?",
      "Evdeki en unutulmaz bayram ya da yılbaşı kutlamamız hangisiydi?",
      "Ailenden birine gözün kapalı güvendiğini hissettiğin en belirgin an hangisiydi?",
      "Kendi hayatında 'iyi ki bu aileyi kurmuşum / bu ailenin parçasıyım' dediğin o dönüm noktası neydi?",
      "Ailenden gizlediğin, onları üzmemek için tek başına göğüslediğin bir zorluk oldu mu?",
      "Ailenin seninle gurur duyduğunu en derinden hissettiğin son olay neydi?",
      "Aile içinde birbirimizi anlamakta en çok zorlandığımız kuşak farkı konusu nedir?",
      "Ailece uzun bir araba yolculuğu yapsanız nereye gitmek ve ne konuşmak isterdin?",
      "Ailemizin gerçek 'gizli kahramanı' kimdir ve neden?",
      "İleride çocuklarına veya gençlere anlatacağın altın değerinde bir hayat öğüdü nedir?",
      "Evimizde yankılanan en komik kahkaha anını hatırlıyor musun?",
      "Senin hayatındaki en büyük fedakarlık kimin içindi?",
      {
        "duo": "Bende gördüğün hangi alışkanlığın doğrudan bu aileden bana geçtiğini düşünüyorsun?",
        "group": "Masadan birini seç: Onda gördüğün hangi alışkanlığın doğrudan bu aileden geçtiğini düşünüyorsun?"
      },
      "Ailece bir arada geçirilen zamanın değerini en çok ne zaman fark ettin?",
      "Ailene olan sevgini ve bağlılığını bir mektuba döksen ilk cümlen ne olurdu?",
      {
        "duo": "Hangi konuda bana gözün kapalı güvenirsin?",
        "group": "Masadan birini seç: Hangi konuda ona gözün kapalı güvenirsin?"
      },
      "Ailemizde herkesin bildiği ama kimsenin konuşmadığı tatlı bir sır var mı?",
      {
        "duo": "10 yıl sonra beni nerede, nasıl bir hayatın içinde mutlu görüyorsun?",
        "group": "Masadan birini seç: 10 yıl sonra onu nerede, nasıl bir hayatın içinde mutlu görüyorsun?"
      },
      "Şu an bu masada olduğumuz için şükrettiğin en büyük sebep nedir?",
      "Ailene olan sevgini ve takdirini günlük hayatta yeterince hissettirebiliyor musun?",
      "Ailemizin hikayesini bir roman olarak yazsak başlığı ne olurdu?",
      "Bir akrabanın senin için söylediği ve hâlâ içini ısıtan bir cümle var mı?",
      "Büyüdüğün ev denince kulağına gelen ilk ses veya burnuna gelen ilk koku nedir?",
      "Ailenle en çok hangi konuda fikir ayrılığı yaşarsın ve bu fark sana ne öğretti?",
      "Aile olarak birlikte gülmekten yerlere yattığınız son anı hatırlıyor musun?",
      "Ailene söylemek istediğin ama 'henüz zamanı değil' diyerek beklettiğin bir düşünce var mı?",
      "Kendi küçüklüğüne dair evde hâlâ anlatılan en sevimli ya da komik anı nedir?",
      "Sence bu ailenin en büyük gücü ve dayanışma kaynağı nedir?",
      "Hayatındaki en zor dönemde ailenden gördüğün desteği nasıl değerlendiriyorsun?",
      {
        "duo": "Beni dışarıda tanımayan birilerine anlatırken nasıl tarif edersin?",
        "group": "Masadan birini seç: Onu dışarıda tanımayan birine anlatırken nasıl tarif ederdin?"
      },
      "Ailece oturup birlikte ağladığınız veya çok duygulandığınız bir anı hatırlıyor musun?",
      "Eski bir çocukluk fotoğrafına baktığında aklından geçen ilk his nedir?",
      "Gelecekte ailemiz nasıl bir yer olmalı?",
      "Ailenden birini çok iyi tanıdığını sandığın halde seni çok şaşırtan bir an oldu mu?",
      "Yaşlandığında ailenden en çok kimin sana benzeyeceğini düşünüyorsun?",
      "Bizim ailemizin simgesi ya da sembolü ne olurdu?",
      "Ailece en son ne zaman gerçekten derin ve kalpten bir sohbet ettiniz?",
      "Ailenden birine her zaman sormak istediğin ama çekindiğin bir soru var mı?",
      "Karakter ve mizaç olarak ailende sana en çok benzeyen kişi kim?",
      "Ailemizde sessiz kalan ama her şeyi en net gören o bilge kişi kim?",
      "Ailenin senden beklediği ama senin kendi yolunu çizdiğin bir hayat tercihin oldu mu?",
      "Ailende gerçekten dinlendiğini ve anlaşıldığını en çok ne zaman hissediyorsun?",
      "Gelecekte torunlarına ya da gençlere bu aileyi ve bu günleri nasıl anlatırsın?",
      "Ailenle arandaki bağı nasıl tanımlarsın: Klasik aile bağı mı, derin bir dostluk mu?",
      "Evimizin en özel, en hatıra dolu köşesi sence neresidir?",
      "Şu an bu masada bir arada olmak nasıl bir huzur ve his veriyor sana?"
    ]
  },
  "dirty": {
    "id": "dirty",
    "name": "Dirty",
    "icon": "🔥",
    "tag": "18+ Flörtöz Gerilim",
    "description": "Flörtöz, çekici, tutkulu ve cinsel gerilimi yükselten cesur sorular",
    "theme": {
      "primary": "#e11d48",
      "primaryDark": "#be123c",
      "glow": "rgba(225, 29, 72, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #380613 0%, #130105 100%)",
      "cardBg": "rgba(51, 6, 17, 0.85)",
      "badgeBg": "rgba(225, 29, 72, 0.15)",
      "badgeBorder": "rgba(225, 29, 72, 0.4)",
      "textColor": "#ffe4e6"
    },
    "questions": [
      "Karşındaki insanda seni fiziksel olarak ilk saniyede en çok çarpan detay nedir: Dudaklar, boyun, eller, gözler?",
      "Bugüne kadar yaptığın en cesur, nabız yükselten flört hamlen neydi?",
      "Bir insanda 'dayanılmaz bir çekim' hissettiğinde vücudunda oluşan ilk fiziksel tepki nedir?",
      "Sence fısıltıyla söylenen kışkırtıcı bir söz mü, yoksa uzun ve sessiz bir göz teması mı daha etkilidir?",
      "Hiç uygunsuz ya da yasak sayılabilecek bir ortamda dayanılmaz bir arzu hissettin mi?",
      "Ten uyumu senin için bir ilişkinin yüzde kaçını oluşturur?",
      {
        "duo": "Bende en çok hangi bölgeye ya da detaya dokunmak merak uyandırıcı olurdu?",
        "group": "Karşındaki insanda en çok hangi bölgeye ya da detaya dokunmak merak uyandırıcı olurdu?"
      },
      "Bir öpücüğün mükemmel ve unutulmaz olması için gereken en önemli kıvılcım nedir?",
      "Daha önce birine sadece kokusu yüzünden karşı konulmaz bir çekim duydun mu?",
      "Baştan çıkarma konusunda avcı mısın yoksa av olmayı mı seversin?",
      "Yatak odasında dominant ve yönlendiren taraf olmak mı hoşuna gider, teslim olmak mı?",
      "Gecenin bir yarısı gelen kışkırtıcı bir mesaj seni ne kadar kolay yoldan çıkarabilir?",
      "Giyildiğinde seni anında etkileyen kıyafet veya iç çamaşırı tarzı nedir?",
      {
        "duo": "Benimle baş başa ve loş bir odada kalsan ilk cesur hareketin ne olurdu?",
        "group": "Masadan birini seç (veya karşındakine dön): Onunla baş başa ve loş bir odada kalsanız ilk cesur hareketin ne olurdu?"
      },
      "Hiç aklından geçen ama sesli söylemeye utandığın erotik bir hayalin oldu mu?",
      "Boyundan öpülmek mi, belden kavranmak mı senin nefesini daha çok keser?",
      "Bir buluşmada cinsel gerilimi bilerek tırmandırmayı sever misin?",
      "Karşındaki kişinin seni arzuladığını belirten en net beden dili hareketi sence nedir?",
      "Hiç kimsenin bilmediği gizli bir erojen bölgen var mı?",
      "Senin için 'seksi' kelimesinin tam karşılığı olan davranış nedir?",
      "Dudak ısırmak, saçla oynamak ya da gözleri kısmak... Hangi hareket seni savunmasız bırakır?",
      "Spontane, tutkulu ve hızlı bir an mı yoksa saatlerce süren yavaş ve derin bir temas mı?",
      {
        "duo": "Beni şu an baştan çıkarmak için 3 cümlen olsa ne söylerdin?",
        "group": "Masadan birini seç (veya karşındakine dön): Onu baştan çıkarmak için 3 cümlen olsa ne söylerdin?"
      },
      "Hiç rüyanda tanıdığın biriyle tutkulu bir kaçamak yaşayıp uyanınca garip hissettin mi?",
      "Sence bir öpüşme ne kadar süre sonra ciddileşip kontrolden çıkmalıdır?",
      "Araba içi, asansör, balkon... Sıra dışı mekanlarda flört gerilimi yaşamak sana heyecan verir mi?",
      "Karşı tarafın kulağına fısıldamak istediğin en cesur şey ne olurdu?",
      "Dokunulmaktan en çok zevk aldığın hassas bölgen neresidir?",
      "Bir ilişkide tutkunun hiç sönmemesi için en gizli taktiğin nedir?",
      "Sence cinsel çekim sonradan kazanılabilir mi yoksa ilk anda var mıdır ya da hiç yoktur?",
      "Gözlerin bağlıyken sadece dokunuşlarla ve sesle yönlendirilmek ilgini çeker mi?",
      {
        "duo": "Gözlerimin içine 5 saniye bak: Şu an içinden geçen en cesur düşünce nedir?",
        "group": "Masadan birini seç ve 5 saniye gözlerine bak: İçinden geçen en cesur düşünce nedir?"
      },
      "Hiç birine karşı koymak isteyip de çekimine yenik düştüğün oldu mu?",
      "Masaj yapmayı mı daha çok seversin, masajla şımartılmayı mı?",
      "Partnerinin üzerinde kontrol sahibi olmak mı, yoksa ipleri tamamen bırakmak mı?",
      "Sence afrodizyak etkisi yaratan en güçlü şey nedir: Müzik, koku, içki, sözler?",
      "Bir kadında/erkekte en çekici bulduğun dekolte veya vücut hattı neresidir?",
      "Hiç tehlikeli bir yerde yakalanma korkusuyla flörtleştin mi?",
      "Sence tutkulu bir sarılmada eller tam olarak nereye gitmelidir?",
      "Seni bir bakışıyla baştan çıkarabilecek birine 'hayır' deme olasılığın nedir?",
      "Gece boyunca sürecek bir oyun oynasak ilk cezan ne olurdu?",
      "Fiziksel temas olmadan sadece konuşarak tahrik olmak mümkün müdür?",
      "En çok hangi kelimelerin fısıldanması kalbinin ritmini hızlandırır?",
      {
        "duo": "Bana şu an masum ya da cesur bir dokunuş yapma hakkın olsa ilk nereye dokunurdun?",
        "group": "Masadan birine (veya karşındakine) masum ya da cesur bir dokunuş yapma hakkın olsa ilk nereye dokunurdun?"
      },
      "İç çamaşırı seçiminde rahatlık mı ön plandadır, yoksa baştan çıkarıcılık mı?",
      "Sence aşk mı seksi güzelleştirir yoksa iyi seks mi aşkı doğurur?",
      "Hiç tanımadığın biriyle göz göze gelip saf bir cinsel elektrik hissettiğin oldu mu?",
      {
        "duo": "İkimiz loş bir ortamda jakuzi veya duş keyfi hayal etsek ambiyans ve müzik nasıl olurdu?",
        "group": "Biriyle loş bir ortamda jakuzi veya duş keyfi hayal etsen ambiyans ve müzik nasıl olurdu?"
      },
      "Senin için 'baştan çıkarmanın ustası' olmanın altın kuralı nedir?",
      {
        "duo": "Gözlerimin içine 10 saniye boyunca hiç kırpmadan bak.",
        "group": "Masadan seçeceğin birinin gözlerinin içine 10 saniye boyunca hiç kırpmadan bak."
      },
      "Partnerinin seni kucağına alması ya da duvara yaslaması seni heyecanlandırır mı?",
      "Sence en seksi dans türü hangisidir?",
      "Kendini en çekici ve karşı konulmaz hissettiğin anlar hangileridir?",
      "Sabah uyanır uyanmaz tutkulu bir temas mı, gece geç saatlerin yorgun sevişmesi mi?",
      {
        "duo": "Beni tek bir kelimeyle 'çekici' kılan özelliğimi söyle.",
        "group": "Masadan birini seç: Onu tek bir kelimeyle 'çekici' kılan özelliği söyle."
      },
      "Hiç biriyle sadece fiziksel çekim yüzünden günlerce aklından çıkaramadığın oldu mu?",
      "Rol yapma veya kurgusal senaryolar ilgini çeker mi?",
      "Partnerinin teninden parfüm kokusu mu gelmeli, yoksa doğal ten kokusu mu?",
      {
        "duo": "Dudaklarıma baktığında aklından geçen ilk düşünce nedir?",
        "group": "Karşındaki kişinin dudaklarına baktığında aklından geçen ilk düşünce nedir?"
      },
      "Gecenin sonunda 'keşke daha ileri gitseydik' dediğin bir anın oldu mu?",
      "Seni baştan çıkarmak isteyen birinin asla yapmaması gereken hata nedir?",
      {
        "duo": "Şu an üzerimdeki hangi kıyafeti veya aksesuarı (ceket, saat, fular vb.) çıkarttırırdın?",
        "group": "Masadan seçeceğin birinin hangi aksesuarını veya kıyafetini (ceket, saat, fular vb.) çıkarttırırdın?"
      },
      {
        "duo": "İkimiz bu ortamdan kaçacak olsak nereye gitmek isterdin?",
        "group": "Masadan birini yanına alıp bu ortamdan kaçacak olsan kimi seçerdin ve nereye giderdiniz?"
      },
      "Birine arzuladığını fısıldamak için doğru zaman ne zaman gelir?",
      "Karşındaki kişinin saçını okşarken ya da boynunu tutarken ne hissedersin?",
      "Seninle yakınlaşmak isteyen biri önce hangi sinyali vermelidir?",
      "Bir ilişkide seni en çok heyecanlandıran 'ilk kez' anı hangisidir?",
      "Biriyle yalnız kaldığında ortamın havasını değiştiren şey nedir?",
      "Gecenin ortasında gözün açıldığında yanında biri olmasını mı yoksa özgür alanı mı tercih edersin?",
      "Sence en uzun süren öpücük kaç dakika olmalıdır?",
      "Bir partnerinin seni en beklenmedik anda sarması ne kadar etkiler?",
      "Şu an en çok hangi dokunuşa ihtiyaç duyuyorsun?",
      "Birine ilk kez dokunduğunda en çok neye dikkat edersin?",
      "Seni 'bu gece senden gözümü alamıyorum' dedirten detay nedir?",
      "Yakınlık kurarken sessizlik mi yoksa konuşmak mı daha anlamlıdır?",
      "Bir partner senin için nasıl bir gerginliği 'iyi bir gerginliğe' dönüştürür?",
      "Seninle başbaşa kalan biri hangi hissi en fazla alır: Güven, heyecan, sıcaklık?",
      "Şu an bu odada seni en çok cezbeden şey nedir?",
      "Bir öpücüğü 'hafıza kaydeden' kılan nedir?",
      "Karşındaki insanı en çok şaşırtabilecek cesur davranışın ne olurdu?",
      "İlk buluşmada dokunmanın doğal hissettirdiği an ne zaman gelir?",
      "Kendinden geçirten bir anın tam öncesinde neler hissediyorsun?",
      {
        "duo": "Benimle yakın bir dans edecek olsan hangi şarkıyı açardın ve beni nasıl tutardın?",
        "group": "Masadan biriyle yakın bir dans edecek olsan kimi seçerdin ve hangi şarkıyı açardın?"
      },
      {
        "duo": "Şu an bana bakışlarınla ne söylemek istiyorsun?",
        "group": "Masadan birine bakışlarınla konuşacak olsan şu an ona ne söylüyor olurdun?"
      },
      "Bir ilişkide bedensel yakınlık ile duygusal yakınlık senin için hangisi önce gelir?",
      "İlk öpüşmende içinde kopan fırtınayı ve o anki heyecanını dürüstçe anlatır mısın?",
      "Şu an bu ortamı nasıl daha heyecanlı ve unutulmaz kılabiliriz?"
    ]
  },
  "nsfw": {
    "id": "nsfw",
    "name": "NSFW",
    "icon": "🔞",
    "tag": "18+ Sansürsüz & Açık",
    "description": "Doğrudan, sansürsüz, yetişkin fantezileri ve cinsel deneyimler",
    "theme": {
      "primary": "#dc2626",
      "primaryDark": "#991b1b",
      "glow": "rgba(220, 38, 38, 0.45)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #1a0305 0%, #050102 100%)",
      "cardBg": "rgba(20, 3, 5, 0.92)",
      "badgeBg": "rgba(220, 38, 38, 0.2)",
      "badgeBorder": "rgba(220, 38, 38, 0.5)",
      "textColor": "#fee2e2"
    },
    "questions": [
      "Yatakta en çok zevk aldığın ve olmazsa olmazın olan pozisyon hangisidir?",
      "Bugüne kadar yaşadığın en unutulmaz, en yoğun orgazm deneyimin nasıldı?",
      "Hiç kimseye anlatmadığın ama gizliden gizliye denemek istediğin en uç fantezin nedir?",
      "Dirty talk seni ne kadar tahrik eder ve hangi kelimeler favorindir?",
      "Oral seks senin için bir ön sevişme detayı mıdır yoksa ana yemek kadar değerli mi?",
      "BDSM, hafif bağlama, kelepçe ya da göz bandı gibi fantezilere ilgin var mı?",
      "Bugüne kadar seks yaptığın en sıra dışı, riskli ya da tehlikeli mekan neresiydi?",
      "Hiç üçlü ya da grup fantezisi düşündün mü ya da deneyimledin mi?",
      "Seks sırasında canının hafifçe yanmasından zevk alır mısın?",
      "Bir partnerde seni saniyeler içinde tamamen seksten soğutan şey nedir?",
      "Sekste kontrolün tamamen sende olması mı, yoksa karşı tarafın seni tamamen yönetmesi mi?",
      "Yetişkin içerik izleme sıklığın nedir ve en çok hangi kategoriler ilgini çeker?",
      "Seks oyuncakları kullanma konusunda deneyimin ve fikrin nedir?",
      "Hiç kamuya açık bir alanda seks yaptın mı?",
      "Senin için ideal bir sevişmenin süresi ne kadar olmalıdır: Hızlı ve sert mi, uzun ve maraton mu?",
      "Hiç sexting yaparken orgazm oldun mu ya da kamera karşısında soyundun mu?",
      "Fetişlerin var mı: Ayak, çorap, deri, üniforma gibi detaylar seni tahrik eder mi?",
      "Partnerinin vücudunda öpmekten en çok doyamadığın yer neresidir?",
      "Hiç birden fazla kez art arda orgazm yaşadın mı?",
      "Yatakta en çok ses çıkaran, inleyen taraf mısın yoksa sessizce yaşayanlardan mı?",
      "Günün hangi saatinde seks yapmak sana en yüksek hazzı verir: Sabah mı, gece yarısı mı?",
      "Hiç sadece fiziksel doyum için arkadaşça seks yaşadın mı?",
      "Sekste sınırların nelerdir; asla yapmam dediğin şey nedir?",
      "Ayna karşısında seks yapmak veya sevişirken kendinizi izlemek seni tahrik eder mi?",
      "Hiç partnerinle birlikte video/fotoğraf çekip sakladığın oldu mu?",
      "Yatakta karşı taraftan duyduğun ve seni anında tepe noktaya ulaştıran en cesur cümle neydi?",
      "Ön sevişme senin için ne kadar sürmeli ve en çok hangi dokunuşlar seni hazırlar?",
      "Hiç tanımadığın biriyle bir gecelik ilişki yaşadın mı, nasıldı?",
      "Mastürbasyon yaparken en çok neyi veya kimi hayal edersin?",
      "Vücuduna çikolata, krem şanti veya masaj yağı sürülerek sevişmek ister miydin?",
      "Partnerinin seni yönlendirip ne yapacağını emretmesi sana nasıl hissettirir?",
      "Hiç cinsel ilişki sırasında komik ya da utanç verici bir kaza yaşadın mı?",
      "Seks sırasında göz teması kurmak mı daha yoğun hissettirir yoksa gözlerin kapalı olması mı?",
      "Daha önce anal deneyim yaşadın mı, bu konudaki merakın ve sınırın nedir?",
      "Yatakta ne kadar maceracısın: 1-10 arası puan versen kaç olurdun?",
      "Partnerinin seni aniden soyup beklemediğin bir anda başlatması seni ne kadar etkiler?",
      "Hiç sarhoşken yaşanan ve sabah hatırladığında seni şaşırtan bir seks anın oldu mu?",
      "Sekste en çok hangi duyu organın seni zirveye taşır: Dokunma, tat, koku, işitme?",
      "Yatak odasında kostüm ya da rol yapma denedin mi?",
      "Hiç birine karşı sadece cinsel takıntı boyutunda yoğun bir arzu duydun mu?",
      "Seks sonrası en çok ne yapmayı seversin: Sarılıp uyumak, duş, sohbet?",
      "Karşı tarafın zevk alması mı seni daha çok tatmin eder, kendi zevkin mi?",
      "Seks sırasında konuşulmasından hoşlandığın en cüretkar konu nedir?",
      "Partnerinin seni izlerken mastürbasyon yapması seni tahrik eder mi?",
      "Hiç evde başkaları varken sessizce sevişmek zorunda kaldın mı?",
      "Senin için 'en vahşi' seks deneyimin hangi mekanda gerçekleşti?",
      "Yatakta reddedilmekten korktuğun için söyleyemediğin bir istek var mı?",
      "Seks yaparken müzik çalması şart mıdır yoksa nefes ve ten sesleri yeterli mi?",
      "Karşındaki kişinin sana özel bir dans yapmasını ister miydin?",
      "Hiç aynı gün içinde 3 veya daha fazla kez seviştiğin oldu mu?",
      "Sekste en çok 'keşke daha önce deneseydim' dediğin şey ne oldu?",
      "Vücudunda partnerinin dokunmasıyla anında titremene sebep olan nokta neresi?",
      "Hiç bir fantezini gerçekleştirdikten sonra hayal kırıklığına uğradığın oldu mu?",
      "Sence mükemmel bir seksin sırrı teknik midir, tutku mu, yoksa duygusal bağ mı?",
      "Hiç otel odasında ya da tatilde tüm günü yataktan çıkmadan geçirdiğin oldu mu?",
      "Sekste en cömert olduğun ve partnerini mest ettiğin özelliğin nedir?",
      "Yatakta tabuların yıkılması senin için ne kadar kolaydır?",
      "Hiç seksten hemen sonra yeniden aşırı arzulandığın bir partnerin oldu mu?",
      "Şu an tam burada, sınırsız ve kuralsız olsaydık aklındaki ilk hamle ne olurdu?",
      "Bir partnerini yatakta en çok şaşırtmak için ne yapardın?",
      "Sekste 'yasak' hissettiren ama tam o yüzden daha çekici gelen bir şey var mı?",
      "Birileri sizi duyabilecekken sessiz kalmak mı daha zor, yoksa tamamen serbest olmak mı?",
      "Hiç birine karşı koyamayıp çok kısa tanıştıktan sonra birlikte olduğun oldu mu?",
      "En uzun ön sevişmen ne kadar sürdü?",
      "Bir partnerinde seksüel olarak en çok ne zaman güçlü çekim hissedersin?",
      "Sekste en çok hangi duyguyu yaşıyorsun: Güç, teslim, haz, bağlılık?",
      "Hiç fantezinde olmayan biriyle seks yaşayıp şaşırdığın oldu mu?",
      "Partnerinin fiziksel olarak hangi özelliği seni en çok büyüler?",
      "Sekste 'mükemmel an' sence nasıl başlar?",
      "Seksüel bir deneyi reddettiğin ve sonradan pişman olduğun bir şey var mı?",
      "Yatak performansın hakkında en çok hangi geri bildirimi aldın?",
      "Sabahın köründe uyandırılarak başlayan bir seks deneyimin oldu mu?",
      "Hiç bir filmde gördüğün erotik sahneyi gerçek hayatta denemek istediğin oldu mu?",
      "Seksüel açıdan en özgür hissettiğin an hangisiydi?",
      "Birine 'bu gece seni baştan çıkaracağım' hissini en net veren davranış nedir?",
      "Sevişirken müzik açsan hangi tür müzik seçerdin?",
      "Hiç tamamen karanlıkta seks yaşadın mı, nasıldı?",
      "Yeni biriyle ilk gecede seni en çok düşündüren ya da heyecanlandıran şey nedir?",
      "Seksüel bir sınırı aşıp 'aslında harikaymış' dediğin bir deneyim oldu mu?",
      "Bir erkekte veya kadında seni en hızlı uyandıran dokunuş bölgesi neresidir?",
      "Bir ilişkide seksüel uyum mu yoksa duygusal bağ mı önce kurulur?",
      "Şu an zihninde seni en çok arzulandıran fantezi nedir?",
      "Seksüel hayatında en büyük 'cesaret' gösterdiğin an neydi?",
      "Bugüne kadar cinsel hayatında verdiğin en iyi karar ne oldu?",
      {
        "duo": "Şu an enerjinle beni ne kadar heyecanlandırdığının farkında mısın?",
        "group": "Şu an bu masada veya ortamda enerjisiyle seni en çok etkileyen kim?"
      }
    ]
  },
  "deep": {
    "id": "deep",
    "name": "En Gizli Sırlar",
    "icon": "🤫",
    "tag": "İtiraflar & Mahremiyet",
    "description": "Maskeleri düşüren, en derin itirafları ve gizli gerçekleri ortaya çıkaran sorular",
    "theme": {
      "primary": "#8b5cf6",
      "primaryDark": "#7c3aed",
      "glow": "rgba(139, 92, 246, 0.35)",
      "bgGradient": "radial-gradient(circle at 50% 20%, #1e1035 0%, #0c0517 100%)",
      "cardBg": "rgba(28, 14, 51, 0.88)",
      "badgeBg": "rgba(139, 92, 246, 0.15)",
      "badgeBorder": "rgba(139, 92, 246, 0.4)",
      "textColor": "#ede9fe"
    },
    "questions": [
      "Hayatın boyunca söylediğin ve ortaya çıkarsa herkesi şok edecek en büyük yalan neydi?",
      {
        "duo": "Benim dahi bilmediğim, mezara kadar götürmeyi düşündüğün sırrın nedir?",
        "group": "En yakın arkadaşının dahi bilmediği, mezara kadar götürmeyi düşündüğün sırrın nedir?"
      },
      "Sosyal medyada gizlice sahte hesapla stalk'ladığın kişi kim ve en son ne zaman baktın?",
      "Hiç bir arkadaşının sevgilisine ya da eski sevgilisine karşı bir anlık da olsa ilgi duydun mu?",
      "Yaptığın ve hâlâ düşündükçe vicdan azabı çektiğin en bencilce hareketin neydi?",
      {
        "duo": "Bende içten içe en çok kıskandığın veya gıpta ettiğin özelliğim nedir?",
        "group": "Grup içinde ya da arkadaş çevrende içten içe en çok kıskandığın veya gıpta ettiğin kişi kim?"
      },
      "İnsanlara gösterdiğin mutlu/güçlü maskenin arkasında en çok sakladığın zayıflığın nedir?",
      "Hiç birinin arkasından çok ağır konuşup yüzüne karşı hiçbir şey olmamış gibi güldün mü?",
      "Hayatında birine yaptığın en büyük haksızlık ya da kötülük neydi?",
      "Telefonun şu an herkesin eline geçse ve şifresi açılsa silmek için ilk koşacağın şey ne olurdu?",
      "Hiç bir arkadaşının başarısına üzüldüğün ya da başarısızlığına gizlice sevindiğin oldu mu?",
      "Ailenden ya da sevdiklerinden gizlediğin en büyük harcaman veya maddi kaybın neydi?",
      "Kendinle ilgili en çok utandığın fiziksel ya da karakteristik kusurun nedir?",
      "Hiç bir ilişkide partnerini aldattın mı (duygusal ya da fiziksel)?",
      "Bugüne kadar birine söylediğin en acımasız ve kalbini kıran söz neydi?",
      "Hiç bir ortamdan kaçmak veya birinden kurtulmak için uydurduğun en büyük yalan neydi?",
      "Şu anki hayatında kimsenin bilmediği gizli bir bağımlılığın ya da takıntın var mı?",
      "Hiç başkasının sana emanet ettiği çok gizli bir sırrı üçüncü bir kişiye anlattın mı?",
      "Biri hakkında 'asla öğrenmemeli' dediğin çok kötü bir düşüncen oldu mu?",
      "Hiç marketten, iş yerinden ya da bir arkadaştan izinsiz bir şey aşırdın mı?",
      "Geçmişinde yasal olarak sınırlarda gezindiğin ya da suç sayılabilecek bir olay var mı?",
      "En son ne zaman tek başına odanda hıçkırarak ağladın ve sebebi neydi?",
      "İçinde biriktirdiğin ve yüzüne haykırmak istediğin ama korktuğun kişi kim?",
      "Hiç birinin ilişkisini bozmaya çalıştığın ya da aralarını açacak bir dedikodu yaydığın oldu mu?",
      "Kendinde en çok nefret ettiğin ama değiştiremediğin toksik özelliğin nedir?",
      "Bugüne kadar yaşadığın en aşağılayıcı ya da küçük düşürücü an neydi?",
      "Hiç birine aşık olmadığı halde sırf yalnız kalmamak ya da çıkar için birlikte oldun mu?",
      "Sosyal medyada paylaştığın en sahte, sadece gösteriş amaçlı olan gönderin hangisiydi?",
      "Ailenden tamamen gizlediğin ve asla bilmelerini istemediğin bir ilişkin ya da dostluğun oldu mu?",
      "Hiç intikam almak için plan yapıp birine sinsice zarar verdin mi?",
      "Şu an hayatından tek bir tuşla tamamen silebileceğin 3 kişi kim olurdu?",
      "Hiç birinin özel mesajlarını, günlüğünü ya da telefonunu gizlice karıştırdın mı?",
      "Kendini zeki, yetenekli ya da başarılı göstermek için uydurduğun büyük bir abartı var mı?",
      "En son ne zaman birine 'seni seviyorum' deyip aslında hiçbir şey hissetmedin?",
      "Gizli gizli dinlediğin ve arkadaşlarının bilse seninle dalga geçeceği şarkı veya sanatçı kim?",
      "Hiç borç alıp bilerek geri ödemediğin ya da unutturmaya çalıştığın biri oldu mu?",
      "Hayatındaki en büyük pişmanlığın olan o tek karar nedir?",
      "Hiç bir kaza yapıp başkasının üzerine attın mı?",
      "İnsanların senin hakkındaki en büyük yanılgısı nedir ve bunu düzeltmeye neden çalışmıyorsun?",
      {
        "duo": "Benim arkamdan hiç başkasıyla dertleştiğin ya da dedikodumu yaptığın oldu mu?",
        "group": "Gruptaki kişilerden birinin arkasından en son ne zaman konuştun?"
      },
      "Hiç sahte gözyaşı dökerek bir durumu kendi lehine çevirdin mi?",
      "Kendini en çok ne zaman çaresiz, yetersiz ve başarısız hissettin?",
      "Geçmişte sana aşık olan birinin duygularıyla bilerek ve isteyerek oynadın mı?",
      "Hiçbir zaman affetmeyeceğin ve içten içe intikam soğukluğunu koruduğun biri var mı?",
      "Gece yatağa yattığında uykunu kaçıran en karanlık düşüncen nedir?",
      "Hiçbir çıkarın olmadığı halde durduk yere söylediğin anlamsız bir yalan oldu mu?",
      "En son ne zaman birine verdiğin sözü bilerek çiğnedin?",
      "Kendi ailenle ilgili dışarıya asla yansıtmadığın en büyük problem nedir?",
      "Hiç bir arkadaşının kıyafetini, tarzını ya da hayatını içten içe rezil bulduğun oldu mu?",
      {
        "duo": "Kendini şu an benden üstün gördüğün tek bir konu söyle.",
        "group": "Kendini şu an bu masadaki herkesten üstün gördüğün tek bir konu söyle."
      },
      "Hiçbir zaman gerçekleşmeyeceğini bildiğin ama vazgeçemediğin gizli hayalin ne?",
      "Sosyal statü veya popülerlik kazanmak için arkadaş grubunu sattığın oldu mu?",
      "Hiç birini stalk'larken yanlışlıkla fotoğrafını beğenip panikle hesabı dondurdun mu?",
      "Başkalarının acısına ya da düşüşüne içten içe 'oh olsun' dediğin bir an oldu mu?",
      "İçinde sakladığın ve bir gün ortaya çıkarsa itibarını zedeleyecek şey nedir?",
      "Hiç partnerinin hediye ettiği bir şeyi çöpe attın ya da başkasına verdin mi?",
      "Kendine bile itiraf etmekte zorlandığın en karanlık arzun nedir?",
      "En son ne zaman birine yardım edebilecekken sırf üşendiğin için görmezden geldin?",
      "Geçmişte yaptığın ve şu anki aklınla asla yanından bile geçmeyeceğin aptallık neydi?",
      "Biriyle sadece parası, arabası ya da mekanı için görüştüğün oldu mu?",
      "Hayatında kaç kez gerçekten aşık oldun ve şu an kimi unutamadın?",
      "İnsanların yanında asla yapmadığın ama yalnızken yaptığın en garip alışkanlığın ne?",
      "Hiç birini kıskandırmak için yapmacık bir mutluluk tiyatrosu oynadın mı?",
      "Eğer bugün dünyanın son günü olsaydı itiraf edeceğin o son cümle ne olurdu?",
      {
        "duo": "Bana şu an bakıp içinde tuttuğun en dürüst gerçeği söyler misin?",
        "group": "Bu masadaki birine şu an bakıp içinde tuttuğun en dürüst gerçeği söyler misin?"
      },
      "Hiç kendin hakkında internette bir şey aramak zorunda kaldın mı?",
      "Şu an hayatında en çok ne seni mahkum ediyor ama kimseye söyleyemiyorsun?",
      "Seni en derinden tanıyan insan ne bilir ki başkaları bilmiyor?",
      "Hayatında yapmak isteyip de vicdanın izin vermediği şey nedir?",
      "En son ne zaman kendinle dürüst bir hesaplaşma yaptın?",
      "Gizlice takip ettiğin ama hiç etkileşime girmediğin bir hesap var mı?",
      "Kendi kendinle en barışık olduğun an hangi andır?",
      "Şu an hayatında 'evet' demen gereken ama 'hayır' dediğin bir şey nedir?",
      "İnsanlar seni tanıyor zannetse de bilmediği tek şey nedir?",
      "Kendinle ilgili en büyük yanılsamanı fark ettiğin an neydi?",
      "Hiç birini sevdiğini sanıp sonradan bunun sadece yalnızlık olduğunu anladın mı?",
      "Şu an en çok neyi inkar etmek istiyorsun?",
      "Kendi karakterinin en utandığın yanını içtenlikle itiraf edebilir misin?",
      "Şimdiye kadar en uzun süre yaşattığın sır ne kadar süredir saklıyor?",
      "Hayatında geriye dönüp 'bu beni çok değiştirdi' dediğin ama kimseye anlatamadığın olay nedir?",
      {
        "duo": "Şu an beni gerçekten en iyi anlayan kişi olduğunu düşünüyor musun?",
        "group": "Şu an bu odada seni en iyi anlayan kişi kim ve sen bunu ona söyledin mi?"
      },
      "En son ne zaman 'bu kadar' deyip durman gerektiğini hissettin ama duramadın?",
      "Gece yarısı düşündüğünde kalbini en çok sıkan şey nedir?",
      "Şu an herkese söylemek istediğin ama cesaretini bulamadığın cümle nedir?",
      "Kendinle ilgili en korktuğun ve gerçek olabileceğini düşündüğün şey nedir?",
      "Şimdiye kadar yaptığın en iyi şey ne — ama bunu neden kimseye söylemiyorsun?",
      {
        "duo": "Benim bilmemi en çok isteyip de bugüne kadar söyleyemediğin şey ne?",
        "group": "Bu masada oturan insanların bilmesini en çok isteyip de söyleyemediğin şey ne?"
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.GAME_CATEGORIES = CATEGORIES;
}
