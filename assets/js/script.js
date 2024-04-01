document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const resultValue = document.getElementById('value');
    const description = document.getElementById('description');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const year = parseInt(document.getElementById('year').value);

        const salary = calcularSalario(year);

        if (!isNaN(salary)) {
            resultValue.textContent = salary.toFixed(2).replace('.', ',');
            description.textContent = `${name}, esse seria o valor aproximado do salário mínimo em ${year}.`;
            document.getElementById('infos').classList.remove('hidden');
        } else {
            resultValue.textContent = 'N/A';
        }
    });

    form.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('calculate').click();
        }
    });

    function calcularSalario(year) {
        const a = 0.000589640878217434;
        const b = -5.92110496895348;
        const c = 23783.4458939329;
        const d = -47765424.4733647;
        const e = 47964435928.1437;
        const f = -19265569713834.9;

        return a*Math.pow(year, 5) + b*Math.pow(year, 4) + c*Math.pow(year, 3) + d*Math.pow(year, 2) + e*year + f;
    }
});
