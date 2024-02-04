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
