# crypto_sentiment_analysis

<b>Crypto Sentiment Analysis</b> is proof-of-concept application designed to determine and evaluate social sentiment of doge cryptocurrency and analyze results in correlation with the cryptocurrency stock ticker value. 
It is a 2-part project first focusing on sentiment analysis of extracted comments from the subReddit r/doge during the time of it's heightened volatility over the span of 3-months in 2021. 

The sentiment analysis can be broken down into 3 subsequent parts:
<ul>
  <li><b>comment extraction</b> - using Reddit API for thread id data of "Daily Discussion" threads for each day of the 3-month span, and the 3rd-party wrapper PMAW for batch extraction of the total 554k comments contained in the "Daily Discussion" threads.</li>
  <li><b>sentiment analysis using VADER</b> - determination of each comment polarity/compound, positive, negative, and neutral score on a -1 to 1 scale as determined by VADER, a SA tool specifically attuned to social media content. From there attributing an overall Positive, Negative, or Neutral rating for each comment based on it's polarity/compound score.</li>
  <li><b>stock value correlation</b> - using CoinGecko API to extract 5-minute interval data of stock value over the span of 3 months. Using timestamps by interval, parsing comment scores to determine mean average of each comment score (Compound, Positive, Negative, Neutral) for every 5 minute interval to run succesively in tandem with stock ticker value for plot/chart use.</li>
</ul>

The second part focuses on evaluation of the classification process and determined accuracy predictions using ML models.
<ul>
<li>Using the VADER compound score of each comment, an overall determination of Comment rating of Positive, Negative, or Neutral was attributed to each comment and applied in training models to determine prediction accuracy using Naive Bayes and Random Forests based on the VADER classification. </li>
<li>Process and performance results of the ML classification and Accuracy Prediction of NB and RF, as well as a classification report and Confusion Matrix Heatmap display as determined by the RF model are included in analysis portion of the project application.</li>
</ul>

<a href="https://crypto-sentiment-analysis.herokuapp.com/">application deployment</a>
