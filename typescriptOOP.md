---

### **TypeScript Overview**

TypeScript - bu Microsoft tomonidan ishlab chiqilgan JavaScript-ning statik tarzda yozilgan super to'plami. U ixtiyoriy turlarni, interfeyslarni va zamonaviy ECMAScript xususiyatlarini qo'shib, toza, o'qilishi mumkin bo'lgan JavaScript-ni kompilyatsiya qiladi.

**Asosiy xususiyatlar:**

* **Xavfsizroq, oldindan taxmin qilinadigan kod uchun statik yozish.**
* **Ob'ektlar va sinflar uchun shartnomalarni aniqlash uchun interfeyslar.**
* **Murakkab vositalar** avtoto'ldirish va refaktoring bilan qo'llab-quvvatlanadi.
* **Zamonaviy ES xususiyatlari** (masalan, asinxron/kutish, modullar) orqaga qarab muvofiqligi bilan.
* **Ish vaqtidan oldin xatolarni aniqlash uchun kompilyatsiya vaqti tekshiruvlari.**

---

### **TypeScript-da ob'ektga yo'naltirilgan dasturlash**

TypeScript **inkapsulyatsiya**, **meros**, **abstraksiya** va **polimorfizm** kabi OOP paradigmalarini to‘liq qo‘llab-quvvatlaydi.

#### 1. **Klasslar**

```ts
class Person {
  constructor(public name: string, private age: number) {}
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

#### 2. **Inheritance**

```ts
class Employee extends Person {
  constructor(name: string, age: number, public role: string) {
    super(name, age);
  }
}
```

#### 3. **Interfaces**

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name = "Dog";
  makeSound() {
    console.log("Woof!");
  }
}
```

#### 4. **Access Modificatorlari**

* `public`: istalgan joydan foydalanish mumkin
* `private`: faqat Klass ichida foydalanish mumkin
* `protected`: Klass va uning quyi Klasslarida foydalanish mumkin

#### 5. **Abstract Klasslar**

```ts
abstract class Shape {
  abstract getArea(): number;
}
```