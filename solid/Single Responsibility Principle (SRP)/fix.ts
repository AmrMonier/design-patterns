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

class Chef {
  constructor(public name: string) {}

  cookDish(dishName: string) {
    // Cooking logic for the dish
    console.log(`Cooking ${dishName} by Chef: ${this.name}`);
  }
}

class ReservationManager {
  constructor(public name: string) {}

  manageReservations(date: Date, name: string) {
    // Logic for managing reservations
    console.log(`Reservations for ${name} on ${date} managed by ${this.name}`);
  }
}
