const car = (name, model, owner, year, phone, image) => ({name, model, owner, phone, image, year});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 123 456 7890', 'images/ffocus.jpg'),
    car('Ford', 'Mondeo', 'Vlad', 2018, '+7 123 456 7777', 'images/fmondeo.jpg'),
    car('Porsche', 'Panamera', 'Feel', 2017, '+7 777 777 7777', 'images/ppanamera.jpg')
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        carSelected: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisible: false,
        search: '',
        modalVisible: false
    },
    methods: {
        selectCar(index) {
            this.carSelected = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisible = false;
            this.logs.push(
                log(`Succes order: ${this.carSelected.name} - ${this.carSelected.model}`, 'ok')
            );
        },
        cancelOrder() {
            this.modalVisible = false;
            this.logs.push(
                log(`Canceled order: ${this.carSelected.name} - ${this.carSelected.model}`, 'cncl')
            );
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisible ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter(carSelected => {
                return carSelected.name.indexOf(this.search) > -1 || carSelected.model.indexOf(this.search) > -1;
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});