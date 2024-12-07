const express = require('express');
const googleSearch = require('../scraper/googleSearch');

const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('index', { error: null });  // Pass an empty error initially
});


// Results
router.get('/results', async (req, res) => {
    const { query } = req.query;

    // Regex to validate currency pair format (e.g., EUR/USD)
    const regex = /^[A-Z]{3}\/[A-Z]{3}$/;

    if (!query || !regex.test(query)) {
        return res.render('results', {
            query: null,
            news: [],
            error: 'Invalid input. Please provide a valid currency pair in the format XXX/YYY.',
        });
    }

    try {
        // Perform Google search
        const results = await googleSearch(query);

        res.render('results', {
            query,
            news: results || [],
            error: null,
        });
    } catch (error) {
        console.error('Error fetching results:', error);
        res.render('results', {
            query,
            news: [],
            error: 'An error occurred while fetching the data.',
        });
    }
});

module.exports = router;

