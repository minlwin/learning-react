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

JavaScript Language မှာ Java နဲ့ လုံးဝမတူတာ တွေရှိတတ်ကြပါတယ်။ အဲ့ဒီအထဲမှာ Boolean Expression လဲ တစ်ခုအပါအဝင်ဖြစ်ပါတယ်။ 

Java မှာတော့ Boolean Type တွေနှင့် Boolean တန်ဖိုးကို ရရှိစေနိုင်တဲ့ Expression တွေပဲ Boolean Expression မှာ အသုံးပြုလို့ရပါတယ်။ ဥပမာအားဖြင့် Method တစ်ခုရဲ့ Return Type ဟာ Boolean ဖြစ်နေတာတို့၊ Variable ရဲ့ Type ဟာ Boolean ဖြစ်နေတာတို့ Relational Expression တွေရဲ့ ရလဒ်ဟာ Boolean ဖြစ်နေတာတို့ကိုပဲ Boolean Expression ကို အသုံးပြုနိုင်တာ ဖြစ်ပါတယ်။ 

JavaScript မှာတော့ အချို့သော တန်ဖိုးတွေဟာ False နှင့် True ကို ဆုံးဖြတ်ပေးနိုင်ပါတယ်။ 

False ဖြစ်စေနိုင်တဲ့ တန်ဖိုးတွေကတော့ အောက်ပါအတိုင်း ဖြစ်ကြပါတယ်။ 

| Evaluate as False | Value                |
|-------------------|----------------------|
|Boolean False      |false                 |
|Zero               |0, -0, 0.0, -0.0      |
|Empty String       |"", ''                |
|No Value           |null                  |
|Uninitialized      |undefined             |
|Not a number       |NaN                   |

TypeScript မှာ JavaScript Code တွေအားလုံးဟာ အသုံးပြုလို့ရတဲ့ အတွက် Bollean Type, Boolean Type ကို Return ပြန်တဲ့ Function တွေ၊ Boolean Expression တွေသာမက String, Number နှင့် အခြားသော Type များကိုလဲ Boolean Expression အနေနဲ့ အသုံးပြုနိုင်မှာ ဖြစ်ပါတယ်။ 

```
export function isFalse(input:any):boolean {
    if(input) {
        return false
    }
    return true
}
```
ဒါကြောင့် အထက်ပါ နမူနာထဲမှာ ရေးထားတဲ့ အတိုင်း any type ဖြစ်တဲ့ input ကို if statement ရဲ့ Boolean Expression အနေနဲ့ အသုံးပြုနိုင်တာ ဖြစ်ပါတယ်။

#### Array

Array နဲ့ပတ်သက်ပြီး Java Basic မှာလဲ လေ့လာခဲ့ပြီးဖြစ်ပါတယ်။ Array တွေဟာ အခြေခံအားဖြင့် တစ်ခုထက်မကသော Element တွေကို Index ဖြင့်မှတ်ပြီး သိမ်းပေးထားနိုင်ပြီး Index ဖြင့် Array ထဲမှာ သိမ်းထားတဲ့ Element တွေကို ပြန်ပြီး ထုတ်ယူ အသုံးပြုနိုင်ပါတယ်။ 

```
// Define an array
const DAY_OF_WEEKS:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export function getDay(index:number):string {
    // Accessing Element with index
    return DAY_OF_WEEKS[index]
}
```

TypeScript ရဲ့ Array တွေဟာလဲ Java မှာလိုပဲ Element တွေကို Index Number တွေနဲ့ Access လုပ်နိုင်ကြပါတယ်။ 

ဒါပေမဲ့ Java မှာက မရှိတဲ့ Index Number ဖြင့် Access လုပ်မိပါက ArrayIndexOutOfBoundException ကို ဖြစ်စေမှာ ဖြစ်ပေမဲ့ TypeScript မှာတော့ Exception ကို မဖြစ်စေပဲ undefined ကို ရရှိစေမှာ ဖြစ်ပါတယ်။ 

ဒီအချက်က Java ရဲ့ Array ဟာ Fix Size Array ဖြစ်ပြီး TypeScript ရဲ့ Array ဟာ Dynamic Size Array ဖြစ်တယ်ဆိုတာကို သိသာစေတဲ့ အချက်ဖြစ်ပါတယ်။ 

### TypeScript Specific Type

## Utility Types