---

slug: blog-one-copy
title: Pub Sub Mimarileri Hakkında
description: This Description Of My First Blog.
date: 11 Ekim 2020
---

Herkese merhaba arkadaşlar,

<p>Bugün sizlerle client-server ve pub-sub mimarilerine kısaca değineceğiz.</p>
Bilgisayar ağlarında günümüzde ve geçmişte sıkça kullanılan patternler arasında hiç şüphesiz client-server mimarisi ilk sıradadır. Client-Server mimarisiyle, sunucu(server) istemci(client) bilgisayarlara istenen içeriği vermektedir.
Client-Server mimarisinde, istemci bir istekte bulunmadan sunucu cevap veremez. İstemci istekte bulunduktan sonra boşta olan sunucu bilgisayarlardan biri istemciye istediği içeriği vermektedir. Web sitesi üzerinden örnek verecek olursak, bir web sitesinin bir sayfasını görüntülemeye çalıştığımızda önce sunucuya bir istekte bulunmamız gerekir ardından sunucu bize görmek istediğimiz sayfanın içeriğini gönderir ve görmemizi sağlar. Yine bir web sitesinin, olmayan bir sayfasını görüntülemeye çalıştığımızda sunucu, istemciye 404 mesajı göndererek bir cevap döndürecektir.
Kısaca, Client-Server mimarisinde, istemci istekte bulunduktan sonra sunucu cevap vermektedir. Mimari bunun üzerine kuruludur ve yaşam döngüsü istekler-cevaplar üzerinedir.
Pub-Sub mimarisi ise, Publisher(Yayıncı), bir kanal açarak veriyi o kanaldan aktarmaya başlar, kimsenin bir istekte bulunmasına gerek yoktur. Subscriber(Abone) ise yayıncının veriyi aktardığı kanala abone olarak veriyi alır ve istediği şekilde işler. Yani publisher’ın subscriberlardan haberi bile yoktur. Client-Server’da server bütün clientlardan haberdardı. Subscriberlar ise sadece kanala üye olurlar ve oradan gelen veriyle ilgilenirler, publisheri bilmezler sadece kanala üye olmaları yeterlidir.
Örnek olarak, Pub-Sub ile çalışan canlı yayın uygulaması yaptığımızı düşünelim. Canlı yayın yaptığımız kaynağı publisher yaparak, kanala anlık olarak veriyi verebiliriz ardından subscriber ile ilgili kanala üye olarak veriyi canlı olarak alabiliriz.