# Lesson 01 : Creating TypeScript Project

ကျွန်တော်တို့ ဒီသင်ခန်းစာမှာ TypeScript Project တစ်ခုကို ဘယ်လို တည်ဆောက်မလဲ။ ပြီးတော့ ရေးသားထားတဲ့ ကုဒ်တွေကို ဘယ်လို Test လုပ်ကြမလဲ ဆိုတာကို လေ့လာသွားကြပါမယ်။ ပြောရမယ်ဆိုရင် Hello World Level သင်ခန်းစာတစ်ခုဖြစ်ပါတယ်။ 


## 1. Initialize Project

TypeScript ကို Test ပါလုပ်လို့ရတဲ့ Project တစ်ခုကို Low Level ကနေ တည်ဆောက်ဖို့ ဆိုရင် အရင်ဆုံး Node Project တစ်ခုကို တည်ဆောက်ကြရပါမယ်။ 

mkdir Command ဖြင့် Project Directory ကို တည်ဆောက်ပြီး Node Project ဖြစ်အောင် Initialize လုပ်ရမှာ ဖြစ်ပါတယ်။

```
mkdir lesson01
cd lesson01
npm init -y
```

npm init -y Comment ကို Execute လုပ်ပြီးတဲ့ အခါမှာ lesson Directory အတွင်းမှာ package.json File ကို တည်ဆောက်ပေးနိုင်ပြီး Node Prject တစ်ခုအနေနဲ့ ပြင်ဆင်ပေးနိုင်မှာ ဖြစ်ပါတယ်။ 

package.json file ကတော့ အောက်ပါအတိုင်း ရှိနေမှာဖြစ်ပါတယ်။ 

```
{
  "name": "lesson1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

## 2. Install TypeSript

package.json file ကို Generate လုပ်ပြီးတဲ့ နောက်မှာ TypeScript ကို Developint Environment မှာ အသုံးပြုနိုင်အောင် ပြင်ဆင်သွားရပါမယ်။ 

```
npm i --save-dev typescript
```

အထက်ပါ Command ကို Execute လုပ်ပြီးတဲ့ အခါမှာ package.json file ဟာ အောက်ပါအတိုင်းပြောင်းလဲသွားမှာ ဖြစ်သလို လိုအပ်တဲ့ Node Modules တွေကိုလဲ Install လုပ်သွားမှာ ဖြစ်ပါတယ်။ 

```
{
  "name": "lesson1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```

## 3. Create TypeScript Configuration

Development Dependency အတွင်းမှာ TypeScript ကို ဖြည့်စွက်ပြီးပြီဆိုရင်တော့ အောက်ပါ Command ကို Execute လုပ်ပြီး TypeScript Configuration File ကို Generate လုပ်ပေးကြရမှာ ဖြစ်ပါတယ်။

```
npx tsc --init
```


## 4. Writing Codes

```
mkdir src
```

```
export function sayHello(name : string) {
    return `Hello ${name}`
}
```

## 5. Install Test Dependencies

```
npm i --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

## 6. Writing Test Code

```
import { sayHello } from "./hello"

test("Hello TypeScript Test", () => {
    expect(sayHello("JDC")).toBe("Hello JDC")
})
```

## 7. Prepare for Test

```
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },
```

## 9. Run Tests

```
npm test
```
