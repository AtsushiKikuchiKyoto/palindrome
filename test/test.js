let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function(){
  describe("#palindrome", function(){

    it("パリンドロームでない場合はfalseを返す",function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("単純なパリンドロームの場合はtrueを返す",function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("パリンドロームが大文字小文字混ざりであってもtrueを返す",function(){
      let LUPalindrome = new Phrase("RaceCar");
      assert(LUPalindrome.palindrome());
    });

    it("パリンドロームに句読点があってもtrueを返す",function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("空文字列はパリンドロームではない",function(){
      let noLetters = new Phrase("");
      assert(!noLetters.palindrome());
    });
  });

  describe("#letters", function(){
    it("文字だけを返す", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("マッチしない場合はから文字を返す",function(){
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
});