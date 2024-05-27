import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Sale.css'; // Импортируйте ваш CSS файл для стилей

const Sale = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals')
      .then(response => {
        const dealsWithRubles = response.data.map(deal => ({
          ...deal,
          normalPriceRubles: Math.round(deal.normalPrice * 75), // Конвертируем цену в долларах в рубли (1 доллар ≈ 75 рублей)
          salePriceRubles: Math.round(deal.salePrice * 75), // Конвертируем цену в долларах в рубли (1 доллар ≈ 75 рублей)
          roundedSavings: Math.round(deal.savings), // Округляем скидку до целого числа
        }));
        setDeals(dealsWithRubles);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading deals...</p>; // Отображаем индикатор загрузки
  }

  if (error) {
    return <p>There was an error loading the deals: {error.message}</p>;
  }

  return (
    <div className='sale_container'>
      <ul>
        <h1>SALE!</h1> 
        {deals.map(deal => (
          <li key={deal.dealID}>
            <img src={deal.thumb} alt={deal.title} />
            <div>
              <h2>{deal.title}</h2>
              <p>Normal Price: ₽{deal.normalPriceRubles}</p> {/* Отображаем цену в рублях */}
              <p>Sale Price: ₽{deal.salePriceRubles}</p> {/* Отображаем цену в рублях */}
              <p>Savings: {deal.roundedSavings}%</p> {/* Отображаем округленную скидку */}
              {/* Исправленная ссылка на Steam */}
              <a href={`https://store.steampowered.com/app/${deal.steamAppID}`} target="_blank" rel="noopener noreferrer">Купить на Steam</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sale;
