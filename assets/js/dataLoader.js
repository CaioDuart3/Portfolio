// Load portfolio data from JSON file
let portfolioData = {};

async function loadPortfolioData() {
  try {
    const response = await fetch('./assets/data/portfolio.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    portfolioData = await response.json();
    console.log('Portfolio data loaded successfully:', portfolioData);
    return portfolioData;
  } catch (error) {
    console.error('Error loading portfolio data:', error);
  }
}

// Load data when the script is executed
loadPortfolioData();
