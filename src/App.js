import logo from './logo.svg';
import './App.css';
import LoanRow from './LoanRow';

function App() {
  return (
    <div>
      <div className="App">
        Student Loan Repayment Calculator
      </div>
      <div className="Main-Container">
          <form>
            <label for="loanTerm">In how many years would you like to repay your student loans?</label>
            <input type="number" />
            
          </form>
          <table className="Loan-table">
            <tr>
              <th>Loans</th>
              <th>Principal Balance</th>
              <th>Interest</th>
              <th>Est. Monthly Payement</th>
              <th />
            </tr>
              <LoanRow rowCount="4"/>
          </table>

        <button> Add Loan</button>
      </div>
    </div>
  );
}

export default App ;
