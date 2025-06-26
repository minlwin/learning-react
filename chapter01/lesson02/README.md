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

Declare လုပ်ပြီးသွားတဲ့ အခါမှာ တန်ဖိုးကို မပြောင်းစေလိုတော့တဲ့ Variable တွေ၊ Java မှာဆိုရင် final variable လိုအရာမျိုးတွေကို ရေးသားလိုတဲ့ အခါမှာ const keyword ကို အသုံးပြုပြီး ရေးသားကြရမှာ ဖြစ်ပါတယ်။ 

