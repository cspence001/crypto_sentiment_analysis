# crypto_sentiment_analysis

<h2>Crypto Sentiment Analysis</h2>
Crypto Sentiment Analysis is a proof-of-concept application designed to determine and evaluate social sentiment of the Dogecoin cryptocurrency, analyzing its correlation with the cryptocurrency's stock ticker value. This repository contains a comprehensive two-part project focused on sentiment analysis and machine learning classification, particularly during Dogecoin's heightened volatility over a span of three months in 2021.

<h3>Sentiment Analysis</h3>
<h4>Comment Extraction</h4>
<ul>
  <li>Utilizing the Reddit API, this project extracts thread ID data from the "Daily Discussion" threads within the subreddit r/doge for each day of the three-month period.</li>
  <li>The PMAW third-party wrapper facilitates the batch extraction of a total of 554k comments contained in these "Daily Discussion" threads.</li>
</ul>
<h4>Sentiment Analysis using VADER</h4>
<ul>
  <li>The sentiment analysis process involves determining the polarity/compound, positive, negative, and neutral scores of each comment on a scale from -1 to 1 using VADER, a sentiment analysis tool specifically attuned to social media content.</li>
<li>Based on the polarity/compound score, each comment is attributed an overall positive, negative, or neutral rating.</li>
</ul>
<h4>Stock Value Correlation</h4>
<ul>
  <li>Utilizing the CoinGecko API, this project extracts 5-minute interval data of Dogecoin's stock value over the span of three months.</li>
  <li>By parsing comment scores and using timestamps by interval, the project calculates the mean average of each comment score (compound, positive, negative, neutral) for every 5-minute interval.</li>
<li>This data is then analyzed successively in tandem with the stock ticker value for plot/chart use, allowing for correlation analysis.</li>
</ul>
<h3>Machine Learning Classification</h3>
<h4>Evaluation of Classification Process</h4>
<ul>
  <li>Using the VADER compound score of each comment, an overall determination of comment rating (positive, negative, neutral) is attributed to each comment.</li>
  <li>These ratings are then applied in training models to determine prediction accuracy using Naive Bayes and Random Forests based on the VADER classification.</li>
</ul>

<h4>Performance Results</h4>
<ul>
    <li>The project includes detailed analyses of the process and performance results of the machine learning classification.</li>
    <li>Accuracy prediction results for Naive Bayes and Random Forest models are presented, along with a classification report and Confusion Matrix Heatmap display as determined by the Random Forest model.</li>
</ul>

<h3>Conclusion</h3>

Crypto Sentiment Analysis provides valuable insights into the social sentiment surrounding Dogecoin, offering a nuanced understanding of its fluctuations in correlation with stock ticker value. This repository serves as a comprehensive resource for those interested in sentiment analysis and machine learning applications within the cryptocurrency domain.

<a href="https://crypto-sentiment-analysis.herokuapp.com/">application deployment</a>
---
<h5>Local Deployment</h5>
```
python3 app.py
```

