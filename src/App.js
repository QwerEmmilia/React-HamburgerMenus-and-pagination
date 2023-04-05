import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item${number === currentPage ? ' active' : ''}`}>
                        <a className="page-link" href="#" onClick={() => onPageChange(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="menu">
        <button className="menu-button" onClick={toggleMenu}>{isOpen ? 'Закрити' : 'Відкрити'} меню</button>
        {isOpen && (
            <ul className="menu-ul">
              <li>Пункт меню 1</li>
              <li>Пункт меню 2</li>
              <li>Пункт меню 3</li>
            </ul>
        )}
      </div>
  );
}
function App() {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Menu />
          <p>Це контент сторінки {currentPage} з {totalPages} сторінок.</p>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default App;
