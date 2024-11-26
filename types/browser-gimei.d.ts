declare module "browser-gimei" {
  export default class Gimei {
    static name(): Name;
    static address(): Address;
  }

  interface Name {
    last: { kanji: string; hiragana: string; katakana: string };
    first: { kanji: string; hiragana: string; katakana: string };
  }

  interface Address {
    prefecture: { kanji: string; hiragana: string; katakana: string };
    city: { kanji: string; hiragana: string; katakana: string };
    town: { kanji: string; hiragana: string; katakana: string };
  }
}
