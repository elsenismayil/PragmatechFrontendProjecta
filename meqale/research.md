# Javascript funksiyalar 
Funksiyalar Javascriptdə, eləcə də müxtəlif proqramlaşdırma dillərində geniş istifadə olunur. Məqsəd daha sürətli, əlverişli, istifadəyə yararlı, sürətli işləyəbilən kod yazmaqdır. 
#### Funksiyalar Necə işləyirlər ?
Funksiyalar müxtəlif dəyişənlərdən istifadə edərək və ya bir araya gətirərək bu dəyişənlərdən tələbə uyğun nəticə qaytaran bir qrupdur. Hər bir funksiyanın bir adı və funksiyaya ötürülən dəyərləri göstərən parametri(leri,) olur. Lakin hər funksiyanın parametrinin olması zəruri deyil. Parametrsiz funksiyalar adından da göründüyü kimi parametr qəbul etmirər. Onların daxilində əməliyyat apardıqdan çağıra bilərik. Funksiyalar işləyərkən bir neçə dəyərlərdən istifadə edirlər. bu dəyərlər emal edilərək bir nəticəyə gəlir. Buradan görünür ki bir funksiya ancaq bir nəticə emal edə bilər. <br>
###### Niye Mehz Funksiya
Funksiyada müxtəlif arqumentlərdən istifadə edərək fərqli zamanlarda fərqli nıticə almaq olar
######  Funksiyanın Ümumi Yazılışı 
function Foo(parametr){ <br>
    // Proseslərin getdiyi yer <br>
} 
###### Funksiya Ümumi Çağırılışı
Yuxarıda yazılan funksiyanı çağırmaq üçün: <br>
Foo(parametr) sintaksisindən istifadə olunur. <br>
###### Funksiyalar Nə zaman Çağırılır
Funksiyalar istifadəçi bir düyməyə basdığında,<br>
Və ya birbaşa çağırılan,<br>
Bir də avtomatik yəni özü özunə çağrılan funksiyalar olurlar.<br>
###### Prametr Və Arqument Anlayışı
Funksiyanı yazarkən ötürdüyümüz dəyərlərə Parametr, Funksiyanı çağırarkən ötürdüyümüz dəyərə isə Arqument deyilir.<br>
// Funksiya bildirir<br>  

function Topla(x, y) // Burada x və y parametr<br>
{<br>
    return (x + y);<br>
}<br>


//Funksiya çağırılır<br>

Topla(7, 3); <br>
###### Funksiyada Return Anlayışı
Funksiyada return açar sözünün 2 vacib mənası və işi vardır:<br>
Funksiyanın dəyərini geri qaytarır. <br>
Funksiyanın sona çatdığını bildirir.<br>
function foo(x,y) {<br>
    return (x+y)<br>
}<br>
##### Funksiyaların növləri
•	Function declaration.<br>
•	Function expression. <br>
•	Shorthand method definition. <br>
•	Arrow function. <br>
•	Generator function. <br>




