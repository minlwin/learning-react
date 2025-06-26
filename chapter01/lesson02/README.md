# Lesson 02 : Defining Variables

Variable ဆိုတာကတော့ Program တွေအတွင်းမှာရှိတဲ့ Data တွေကို သိမ်းပေးထားနိုင်တဲ့ အစိတ်အပိုင်း တစ်ခုဖြစ်ပါတယ်။ အခြေခံသင်္ချာမှာ ပါဝင်တဲ့ မသိကိန်းနဲ့ ဆင်တူပါတယ်။ 

Varaible တွေမှာ တန်ဖိုးတွေကို အစားထိုးပြီး သိမ်းထားနိုင်မှာ ဖြစ်ပြီး အသုံးပြုလိုတဲ့ နေရာတွေမှာ Variable တွေကို Access လုပ်ပြီး အသုံးပြုနိုင်မှာ ဖြစ်ပါတယ်။ 

## Declaring Variable

Programming Language အတော်များများမှာ Variable တစ်ခုကို အသုံးပြုတော့မယ်ဆိုရင် အသုံးပြုပါမယ်လို့ ကြိုတင် Declare လုပ်ထားဖို့လိုအပ်ပါတယ်။ 

Variable တွေကို ရေးသားတဲ့ အခါမှာ တစ်ခါ Declare လုပ်ပြီး တန်ဖိုးကို ပြောင်းလဲနိုင်တဲ့ Variable တွေလဲ ရှိတတ်ကြသလို၊ တန်ဖိုးကို တစ်ခါသတ်မှတ်ပြီးတဲ့နောက် တန်ဖိုးကို မပြောင်းစေလိုတဲ့ Variable တွေလဲရှိတတ်ကြပါတယ်။

```
var count:number
let today:string
```

Declare လုပ်ပြီးနောက် တန်ဖိုးပြောင်းလဲလိုတဲ့ Varaible တွေကို var ဒါမှမဟုတ် let keyword ဖြင့် သတ်မှတ်ပေးနိုင်ပါတယ်။ 

JavaScript ရဲ့ ကနဦး Version တွေမှာ Variable တွေကို Declare လုပ်ဖို့ var တစ်မျိုးထဲကိုသာ အသုံးပြုခဲ့ကြပါတယ်။ ဒါပေမဲ့ var ဖြင့် သတ်မှတ်ရေးသားသော Variable တွေဟာ Scope တစ်ခုထဲမှာ နောက်တစ်ကြိမ် ပြန်ပြီး Declare လုပ်နိုင်ခြင်း Scope ပြင်ပအထိ အသုံးပြုနေနိုင်ခြင်းတို့ကြောင့် နောက်ပိုင်းမှာ Block Scope အတွင်းမှာ အသုံးပြုနိုင်ဖို့အတွက် let ကို ဖြည့်စွက်လာခဲ့ကြတာ ဖြစ်ပါတယ်။ 

```
// var can declare again within same scope
var count:number
var count:number

for(var i = 0; i < 10; i ++) {
    console.log(i)
}

// var can be seen outside the block
console.log(i)
```

Declare လုပ်ပြီးသွားတဲ့ အခါမှာ တန်ဖိုးကို မပြောင်းစေလိုတော့တဲ့ Variable တွေ၊ Java မှာဆိုရင် final variable (Constant) လို Variable မျိုးတွေကို ရေးသားလိုတဲ့ အခါမှာ const keyword ကို အသုံးပြုပြီး ရေးသားကြရမှာ ဖြစ်ပါတယ်။ 

Constant Variable တွေဟာ Declare လုပ်ပြီးတဲ့နောက်မှာ တန်ဖိုးကို ပြောင်းလို့မရနိုင်တဲ့အတွက် Variable ကို Declare လုပ်တဲ့အခါမှာ တန်ဖိုးကို သတ်မှတ်ပေးဖို့လိုအပ်ပါတယ်။ 

```
// Declaring Constant
const BASE_URL:string = 'http://localhost:8080'
```

## Type Inference

အခြေခံအားဖြင့်တော့ TypeScript မှာ Variable တွေကို Declare လုပ်တဲ့အခါမှာ Type ကို သတ်မှတ်ရေးသားပေးကြရမှာ ဖြစ်ပါတယ်။ ဒါပေမဲ့ Variable ကို Declare လုပ်တဲ့အခါမှာ တန်ဖိုးကို သတ်မှတ်ရေးသားထားပါက တန်ဖိုးကို ကြည့်ပြီး Type ကို ခန့်မှန်းနိုင်တဲ့အတွက် Type ကို မရေးသားရင်လဲ ရပါတယ်။ 

```
// Type of TYPESCRIPT is string
const TYPESCRIPT = "TypeScript"

// Type of result is boolean
let result = false

// Type of counter is number
var counter = 0
```

## Basic Data Types

TypeScript ဟာ Super Sert of JavaScript ဆိုတဲ့အတိုင်း JavaScript Type တွေအားလုံးဟာ TypeScript မှာ အသုံးပြုလို့ရပါတယ်။ ထို့အပြင် TypeScript က ထပ်မံဖြည့်စွက်ထားတဲ့ Basic DataType တွေလဲ ရှိသလို ရှိပြီးသား Type တွေကို လိုအပ်သလို ပြောင်းလဲနိုင်အောင် ပြင်ဆင်ပေးထားတဲ့ Utility Types တွေလဲ ရှိကြပါတယ်။

### JavaScript Types

| Type    | Sample Value       |
|---------|--------------------|
| boolean | true, false        |
| string  | "value" or 'value' | 
| number  | 0, -0, 0.0, -0.001 |

#### Truthy & Falsy

#### Array

### TypeScript Specific Type

## Utility Types