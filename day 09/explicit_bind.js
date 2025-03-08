const car = {
    start() {
        let brand = "Tesla"
        let lala = () => {
            console.log(`Starting ${this.brand}...`);
        }
    }
};

const lala = car.start();
lala()