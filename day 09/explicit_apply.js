// apply() এবং call() একই কাজ করে, কিন্তু apply() অ্যারে আকারে আর্গুমেন্ট গ্রহণ করে।

function introduce(city, country){
    console.log(`I am ${this.name} from ${city} ${country}`);
}

const person = { name : "pitam chandra"}
introduce.apply(person, ['dhaka', 'Bangladesh'])
