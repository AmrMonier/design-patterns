# Single Responsibility Principle (SRP)

## Definition

The Class should have only one reason to change. which means that a class should have only one responsibility.

## Explanation

let's assume we are building a Restaurant Management System, our restaurant software would handle customer reservations, and dishes preparation by the one and only Chef **Gordon Ramsey**.

we can build it in one class, which would be something like this:

```typescript
class Restaurant {
  constructor(public chefName: string) {}

  cookDish(dishName: string) {
    console.log(`Cooking ${dishName}`);
  }

  manageReservations(date: Date, name: string) {
    // Logic for managing reservations
    console.log(`Reservations for ${name} on ${date} managed`);
  }
}
```

but can you see the problem here? the class is doing two things, managing reservations and cooking dishes, and if we need to change the way we manage reservations let's say we want to add logic to cancel or update reservation, we would have to change the class, and if we need to change the way we cook dishes let's say we now hired a second chef, we would have to change the class as well. and that's a violation of the Single Responsibility Principle. our Restaurant class now have two jobs to do, Cooking Dishes and Managing reservation.

so to fix this, we can split the class into two classes, one for managing reservations and another for cooking dishes.

```typescript
class ReservationManager {
  constructor(public name: string) {}

  manageReservations(date: Date, name: string) {
    // Logic for managing reservations
    console.log(`Reservations for ${name} on ${date} managed by ${this.name}`);
  }
}

class Chef {
  constructor(public name: string) {}

  cookDish(dishName: string) {
    // Cooking logic for the dish
    console.log(`Cooking ${dishName} by Chef: ${this.name}`);
  }
}
```

now we have two classes, each class has only one responsibility, and if we need to change the way we manage reservations, we only need to change the ReservationManager class, and if we need to change the way we cook dishes, we only need to change the Chef class. and that's the Single Responsibility Principle in action. and based on this our restaurant software would be more maintainable and flexible.

```typescript
class RestaurantFix {
  public chefs: Chef[];
  public reservationManager: ReservationManager;
  constructor() {
    this.chefs = [new Chef("Monica Geller")];
    this.reservationManager = new ReservationManager("Chandler Bing");
  }

  addChef(name: string) {
    this.chefs.push(new Chef(name));
  }
}
```
