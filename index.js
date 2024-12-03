// 文字列を逆順にして返す
// function reverse(string){
// return Array.from(string).reverse().join("");
// };
// 注意必要：reverse()メソッドの追加
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
};

// 注意必要：練習問題：blank()メソッドの追加
String.prototype.blank = function(){
  let re = /^\s*$/
  return re.exec(this) != null;
};
// console.log("".blank()) //true
// console.log(" ".blank()) //true
// console.log(" a b c  ".blank()) //false

// 注意必要：練習問題：last()メソッドの追加
Array.prototype.last = function(){
  return this.slice(-1);
};
// console.log([1,2,3].last()) //[3]
// console.log(["a","b","c"].last()) //["c"]

function emailParts(email){
  let user = email.split("@")[0];
  let domain = email.split("@")[1];
  return [user, domain];
};
console.log(emailParts("abc@def.com"));

// オブジェクト
function Phrase(content){
  // プロパティ
  this.content = content;

  this.processor = function(string){
    return string.toLowerCase();
  };

  this.processedContent = function processedContent(){
    return this.processor(this.content);
  };

  // パリンドローム判定メソッド
  this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
  }

  // 練習問題:大文字変換メソッド
  this.louder = function louder(){
    return this.content.toUpperCase();
  }
};

// オブジェクト
function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent(){
    return this.processor(this.translation);
  }
}
// 継承
TranslatedPhrase.prototype = new Phrase();

// 実行処理
phrase = new Phrase("Racecar");
frase = new TranslatedPhrase("recognize", "reconocer");
console.log(phrase.palindrome())
console.log(frase.processedContent())
console.log(frase.palindrome())