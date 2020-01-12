
  
  

## **Weather App**
  

 **Nodejs Versiyon**  - Stabil : 12.13.0  
  

## **Özet ve Notlar**

 Proje [Vuejs](https://vuejs.org/)  kullanılarak geliştirilmiştir. Sitiller için [SCSS](https://sass-lang.com/) tercih edilmiş ve ITCSS mimarisi üzerine temel bir yapı kurulmuştur.


Uygulama SPA olarak çalışmaktadır. Eklenen JS viewler [Webpack](https://webpack.js.org/)  ile split edilip, lazy load olarak yüklenmektedir.  Hızlı geliştirme için custom pipeline yerine [Vue Cli](https://cli.vuejs.org/) tercih edilmiştir.

Unit test yazımı için [Jest](https://jestjs.io/) kullanılmıştır.

[Link](http://tiys.net/aydin/arcelik/#/) e tıklayarak demoya ulaşabilirsiniz.


 

## **Dev Bağımlılıkları**

  

Projenin bağımlılık baketleri : **[nodejs](https://nodejs.org/en/)** , **[yarn](https://yarnpkg.com/lang/en/)** , ve **[webpack](https://webpack.js.org/)** tir.

  

İşletim sisteminize uygun nodejs kurulumunu tamamladıktan sonra global yarn kurulumu için terminal ekranından aşağıdaki komutu çalıştırmanız gerekmektedir.

  

    npm install -g yarn

  
  
  

## **Projenin Kurulumu**

  

Kurulumu gerçekleştirmek için proje dizininde iken terminal ekranında aşağıdaki komutu çalıştırmanız yeterli olacaktır.

  

    yarn install

  

  

## **Terminal komutları**

  
 

    yarn serve

  

Geliştirme ortamını local:8080 portunuzdan ayağa kaldırır.

  

---

    yarn build

  

Projeyi production için paketler.

---

    yarn test:unit

  

Unit testleri çalıştırır.