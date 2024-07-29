if (!localStorage.getItem('islogged')) {
    alert("You must complete the registration.")
    window.location.href = "../HTML/login.html"
}


const fechasInput = document.getElementById('fechas');
const tipoClienteSelect = document.getElementById('tipoCliente');
const searchButton = document.getElementById('search');
const resultsDiv = document.getElementById('results_p');

class Hotel {
    constructor(nombre_hotel, calificacion, tarifa) {
        this.nombre_hotel = nombre_hotel;
        this.calificacion = calificacion;
        this.tarifa = tarifa;
    }
}

searchButton.addEventListener('click', () => {
    const fechas = fechasInput.value.split(',').map(fecha => fecha.trim());
    const tipoCliente = tipoClienteSelect.value;

    let hoteles = [
        new Hotel('Lakewood', 3, {
            dayOfWeek: { regular: 110, reward: 80 },
            isWeekend: { regular: 90, reward: 80 }
        }),

        new Hotel('Bridgewood', 4, {
            dayOfWeek: { regular: 160, reward: 110 },
            isWeekend: { regular: 60, reward: 50 }
        }),

        new Hotel('Ridgewood', 5, {
            dayOfWeek: { regular: 220, reward: 110 },
            isWeekend: { regular: 150, reward: 40 }
        }),
    ];

    hoteles.forEach(hotel => {
        hotel.calcularPrecioTotal = function (fechas, tipoCliente) {
            let precioTotal = 0;
            fechas.forEach(fecha => {
                let dateParts = fecha.match(/(\d{2})(\w{3})(\d{4})/);
                let day = parseInt(dateParts[1], 10);
                let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(dateParts[2]) + 1;
                let year = parseInt(dateParts[3], 10);

                let date = new Date(year, month - 1, day);
                let dayOfWeek = date.getDay();

                let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                let tarifa = isWeekend ? this.tarifa.isWeekend : this.tarifa.dayOfWeek;
                let total = tipoCliente === 'regular' ? tarifa.regular : tarifa.reward;
                precioTotal += total;
            });
            return precioTotal;
        };
    });

    // Calcular el precio total para cada hotel con cada combinación de fechas y tipo de cliente
    let resultados = hoteles.map(hotel => ({
        hotel,
        precioTotal: hotel.calcularPrecioTotal(fechas, tipoCliente)
    }));

    // Verificar si hay empate, establecer un orden de acuerdo a la mayor calificación.

    resultados.sort((a, b) => {
        if (a.precioTotal === b.precioTotal) {
            return b.hotel.calificacion - a.hotel.calificacion;
        } else {
            return a.precioTotal - b.precioTotal;
        }
    });


    // Mostrar el resultado
    let hotelMasBarato = resultados[0];

    // Resultado: Nombre del Hotel
    resultsDiv.innerHTML = `${hotelMasBarato.hotel.nombre_hotel}`;
});
