/* class worldBank{
    save()
    {
        console.log("save method of worldBank");
    }
      loan()
    {
        console.log("loan method of worldBank");
    }
}

class sbi extends worldBank{
    Bankname()
    {
        console.log("Bank name is sbi");
    }
     save()
    {
        console.log("save method of sbi");
    }
      loan()
    {
        console.log("loan method of sbi");
    }
}

class hdfc extends worldBank{
Bankname()
    {
        console.log("Bank name is hdfc");
    }
}

let s1=new sbi();
s1.save();
//s1.super.save(); // to call parent class method
s1.loan();
s1.Bankname();

     */

class human{
    Talk()
    {
        console.log("human can talk");
    }
}
class Duck{
      Talk()
    {
        console.log("Quak Quak");
    }
}
class Dog{
      Talk()
    {
        console.log("Bow Bow");
    }
}

function call_talk(obj)
{
    obj.Talk();
}

a=new human();
b=new Duck();
c=new Dog();

call_talk(a);
call_talk(b);
call_talk(c);