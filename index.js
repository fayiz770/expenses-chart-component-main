import { spends, lastMonth, thisMonth, percentage } from './data.js'

const mainBalance = document.getElementById('main-balance')
const diagram = document.getElementById('diagram')
const totalAmount = document.getElementById('total-amount')
const percentageElement = document.getElementById('percentage-element')


mainBalance.innerText = lastMonth + thisMonth
totalAmount.innerText = thisMonth
percentageElement.innerText = percentage.toFixed(2)


for(let spend of spends){
    diagram.innerHTML += `
        <div class="item">
            <span class="tooltip">$${spend.price}</span>
            <div 
                class="graph ${spend.day}"
                style="
                    height: ${spend.price/10}em;
                    background:${spend.price > 70 ? "var(--cyan)" : "var(--dark-brown)"}
                    "
                ></div>
            <p>${spend.day}</p>
          </div>
    `
}