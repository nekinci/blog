---
slug: blog-one
title: My First Blog
description: This Description Of My First Blog.
date: 11 Ekim 2020
---


<p id="34f1" class="gy gz fg ha b hb hc hd he hf hg hh hi hj hk hl hm hn ho hp hq hr cu cz" data-selectable-paragraph="">Herkese merhaba arkadaşlar,<br>Bugün sizlerle <strong class="ha ch">client-server ve pub-sub mimarilerine</strong> kısaca değineceğiz.</p>

<p id="a182" class="gy gz fg ha b hb hs hc hd he ht hf hg hh hu hi hj hk hv hl hm hn hw ho hp hr cu cz" data-selectable-paragraph="">Bilgisayar ağlarında günümüzde ve geçmişte sıkça kullanılan patternler arasında hiç şüphesiz client-server mimarisi ilk sıradadır. Client-Server mimarisiyle, sunucu(server) istemci(client) bilgisayarlara istenen içeriği vermektedir.</p>

<p id="44f8" class="gy gz fg ha b hb hs hc hd he ht hf hg hh hu hi hj hk hv hl hm hn hw ho hp hr cu cz" data-selectable-paragraph="">Client-Server mimarisinde, istemci bir istekte bulunmadan sunucu c<span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm"><span id="rmm">e</span></span></span></span></span></span></span></span>vap veremez. İstemci istekte bulunduktan sonra boşta olan sunucu bilgisayarlardan biri istemciye istediği içeriği vermektedir. Web sitesi üzerinden örnek verecek olursak, bir web sitesinin bir sayfasını görüntülemeye çalıştığımızda önce sunucuya bir istekte bulunmamız gerekir ardından sunucu bize görmek istediğimiz sayfanın içeriğini gönderir ve görmemizi sağlar. Yine bir web sitesinin, olmayan bir sayfasını görüntülemeye çalıştığımızda sunucu, istemciye 404 mesajı göndererek bir cevap döndürecektir. <br><strong class="ha ch">Kısaca</strong>, Client-Server mimarisinde, istemci istekte bulunduktan sonra sunucu cevap vermektedir. Mimari bunun üzerine kuruludur ve yaşam döngüsü istekler-cevaplar üzerinedir.</p>

<p id="9e5f" class="gy gz fg ha b hb hs hc hd he ht hf hg hh hu hi hj hk hv hl hm hn hw ho hp hr cu cz" data-selectable-paragraph="">Pub-Sub mimarisi ise, <strong class="ha ch">Publisher(Yayıncı), </strong>bir kanal açarak veriyi o kanaldan aktarmaya başlar, kimsenin bir istekte bulunmasına gerek yoktur. <strong class="ha ch">Subscriber(Abone) </strong>ise yayıncının veriyi aktardığı kanala abone olarak veriyi alır ve istediği şekilde işler. Yani publisher’ın subscriberlardan haberi bile yoktur. Client-Server’da server bütün clientlardan haberdardı. Subscriberlar ise sadece kanala üye olurlar ve oradan gelen veriyle ilgilenirler, publisheri bilmezler sadece kanala üye olmaları yeterlidir.<br>Örnek olarak, Pub-Sub ile çalışan canlı yayın uygulaması yaptığımızı düşünelim. Canlı yayın yaptığımız kaynağı publisher yaparak, kanala anlık olarak veriyi verebiliriz ardından subscriber ile ilgili kanala üye olarak veriyi canlı olarak alabiliriz.</p>