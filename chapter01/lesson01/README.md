# Lesson 01 : Creating TypeScript Project

ကျွန်တော်တို့ ဒီသင်ခန်းစာမှာ TypeScript Project တစ်ခုကို ဘယ်လို တည်ဆောက်မလဲ။ ပြီးတော့ ရေးသားထားတဲ့ ကုဒ်တွေကို ဘယ်လို Test လုပ်ကြမလဲ ဆိုတာကို လေ့လာသွားကြပါမယ်။ ပြောရမယ်ဆိုရင် Hello World Level သင်ခန်းစာတစ်ခုဖြစ်ပါတယ်။ 


## 1. Initialize Project

```
mkdir lesson01
cd lesson01
npm i -y
```

## 2. Install TypeSript

```
npm i --save-dev typescript
```


## 3. Create TypeScript Configuration

```
npx tsc --init
```


## 4. Create Source Directory

```
mkdir src
```

## 5. Install Testing Library

```
npm i --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

## 6. Create Target 

```
export function sayHello(name : string) {
    return `Hello ${name}`
}
```

## 7. Create Test File

```
import { sayHello } from "./hello"

test("Hello TypeScript Test", () => {
    expect(sayHello("JDC")).toBe("Hello JDC")
})
```

## 8. Prepare for Test

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
