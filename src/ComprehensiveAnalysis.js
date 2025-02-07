import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
// Import the JSON file with the extended Q1 history
import q1History from './q1_history.json';

const stockColors = {
  NFLX: "#FF4136",
  GOOGL: "#2ECC40",
  WBD: "#B10DC9",
  DIS: "#01FF70",
  MSFT: "#0074D9",
  NTDOY: "#FF851B",
  RBLX: "#7FDBFF",
  META: "#39CCCC",
  SNAP: "#F012BE",
  AMZN: "#FF6F61",
  PDD: "#6B5B95",
  SHOP: "#88B04B"
};

const stockData = {
  "Streaming & Content": [
    {
      ticker: "NFLX",
      name: "Netflix, Inc.",
      marketCap: 434.46,
      peRatio: 51.25,
      operatingMargin: 29.61,
      revenue_growth: 15.0,
      sentiment: 90.0,
      aiExposure: "Low",
      analystRating: 1.8,
      shortInterest: 1.6,
      historical_q1: [
        { year: 2022, performance: -36.14 },
        { year: 2023, performance: 14.74 },
        { year: 2024, performance: 29.63 },
        { year: 2025, performance: 14.54 }
      ],
      color: stockColors.NFLX
    },
    {
      ticker: "GOOGL",
      name: "Alphabet Inc.",
      marketCap: 2346.45,
      peRatio: 23.83,
      operatingMargin: 32.31,
      revenue_growth: 15.1,
      sentiment: 82.0,
      aiExposure: "Low",
      analystRating: 1.6,
      shortInterest: 1.1,
      historical_q1: [
        { year: 2022, performance: -2.11 },
        { year: 2023, performance: 13.21 },
        { year: 2024, performance: 9.24 },
        { year: 2025, performance: 1.15 }
      ],
      color: stockColors.GOOGL
    },
    {
      ticker: "WBD",
      name: "Warner Bros. Discovery, Inc.",
      marketCap: 25.02,
      peRatio: null,
      operatingMargin: 5.22,
      revenue_growth: -3.6,
      sentiment: 82.0,
      aiExposure: "Low",
      analystRating: 2.2,
      shortInterest: 3.5,
      historical_q1: [
        { year: 2022, performance: 1.46 },
        { year: 2023, performance: 55.66 },
        { year: 2024, performance: -25.13 },
        { year: 2025, performance: -4.32 }
      ],
      color: stockColors.WBD
    },
    {
      ticker: "DIS",
      name: "Walt Disney Company (The)",
      marketCap: 202.64,
      peRatio: 36.39,
      operatingMargin: 14.91,
      revenue_growth: 3.7,
      sentiment: 83.0,
      aiExposure: "Low",
      analystRating: 1.9,
      shortInterest: 1.0,
      historical_q1: [
        { year: 2022, performance: -10.08 },
        { year: 2023, performance: 10.26 },
        { year: 2024, performance: 34.89 },
        { year: 2025, performance: 1.15 }
      ],
      color: stockColors.DIS
    }
  ],
  "Gaming & eSports": [
    {
      ticker: "MSFT",
      name: "Microsoft Corporation",
      marketCap: 3091.2,
      peRatio: 33.53,
      operatingMargin: 46.58,
      revenue_growth: 16.0,
      sentiment: 55.0,
      aiExposure: "Low",
      analystRating: 1.4,
      shortInterest: 0.8,
      historical_q1: [
        { year: 2022, performance: -6.05 },
        { year: 2023, performance: 18.86 },
        { year: 2024, performance: 13.65 },
        { year: 2025, performance: -0.66 }
      ],
      color: stockColors.MSFT
    },
    {
      ticker: "NTDOY",
      name: "Nintendo Co., Ltd.",
      marketCap: 84.12,
      peRatio: 39.91,
      operatingMargin: 0,
      revenue_growth: 0,
      sentiment: 65.0,
      aiExposure: "Low",
      analystRating: 1.0,
      shortInterest: 0,
      historical_q1: [
        { year: 2022, performance: 9.78 },
        { year: 2023, performance: -8.29 },
        { year: 2024, performance: 6.17 },
        { year: 2025, performance: 22.34 }
      ],
      color: stockColors.NTDOY
    },
    {
      ticker: "RBLX",
      name: "Roblox Corporation",
      marketCap: 44.05,
      peRatio: null,
      operatingMargin: -30.35,
      revenue_growth: 28.8,
      sentiment: 90.0,
      aiExposure: "Low",
      analystRating: 2.1,
      shortInterest: 5.3,
      historical_q1: [
        { year: 2022, performance: -51.3 },
        { year: 2023, performance: 54.79 },
        { year: 2024, performance: -11.19 },
        { year: 2025, performance: 14.07 }
      ],
      color: stockColors.RBLX
    }
  ],
  "Social Media": [
    {
      ticker: "META",
      name: "Meta Platforms, Inc.",
      marketCap: 1803.94,
      peRatio: 29.79,
      operatingMargin: 42.77,
      revenue_growth: 18.9,
      sentiment: 90.0,
      aiExposure: "Low",
      analystRating: 1.5,
      shortInterest: 1.2,
      historical_q1: [
        { year: 2022, performance: -32.7 },
        { year: 2023, performance: 66.62 },
        { year: 2024, performance: 40.37 },
        { year: 2025, performance: 18.82 }
      ],
      color: stockColors.META
    },
    {
      ticker: "SNAP",
      name: "Snap Inc.",
      marketCap: 18.13,
      peRatio: null,
      operatingMargin: -12.62,
      revenue_growth: 15.5,
      sentiment: 59.0,
      aiExposure: "Low",
      analystRating: 2.8,
      shortInterest: 8.3,
      historical_q1: [
        { year: 2022, performance: -20.93 },
        { year: 2023, performance: 23.28 },
        { year: 2024, performance: -28.87 },
        { year: 2025, performance: -4.89 }
      ],
      color: stockColors.SNAP
    }
  ],
  "E-commerce": [
    {
      ticker: "AMZN",
      name: "Amazon.com, Inc.",
      marketCap: 2511.3,
      peRatio: 51.03,
      operatingMargin: 10.96,
      revenue_growth: 11.0,
      sentiment: 60.0,
      aiExposure: "Low-Medium",
      analystRating: 1.4,
      shortInterest: 0.9,
      historical_q1: [
        { year: 2022, performance: -2.41 },
        { year: 2023, performance: 18.85 },
        { year: 2024, performance: 20.31 },
        { year: 2025, performance: 8.45 }
      ],
      color: stockColors.AMZN
    },
    {
      ticker: "PDD",
      name: "PDD Holdings Inc.",
      marketCap: 156.54,
      peRatio: 11.02,
      operatingMargin: 33.55,
      revenue_growth: 85.7,
      sentiment: 64.0,
      aiExposure: "Low",
      analystRating: 1.5,
      shortInterest: 3.2,
      historical_q1: [
        { year: 2022, performance: -22.0 },
        { year: 2023, performance: -9.57 },
        { year: 2024, performance: -20.18 },
        { year: 2025, performance: 16.34 }
      ],
      color: stockColors.PDD
    },
    {
      ticker: "SHOP",
      name: "Shopify Inc.",
      marketCap: 153.1,
      peRatio: 110.82,
      operatingMargin: 15.77,
      revenue_growth: 26.1,
      sentiment: 88.0,
      aiExposure: "Low",
      analystRating: 2.0,
      shortInterest: 2.3,
      historical_q1: [
        { year: 2022, performance: -48.24 },
        { year: 2023, performance: 30.35 },
        { year: 2024, performance: 4.52 },
        { year: 2025, performance: 10.28 }
      ],
      color: stockColors.SHOP
    }
  ]
};

// ---------------------------------------------------------------------
// Merge the extended Q1 historical data from q1History into stockData.
const mergeQ1Data = (data, q1Data) => {
  const merged = { ...data };
  Object.keys(merged).forEach(section => {
    if (q1Data[section]) {
      merged[section] = merged[section].map(company => {
        const q1Entry = q1Data[section].find(item => item.ticker === company.ticker);
        if (q1Entry && q1Entry.historical_q1) {
          return { ...company, historical_q1: q1Entry.historical_q1 };
        }
        return company;
      });
    }
  });
  return merged;
};

const updatedStockData = mergeQ1Data(stockData, q1History);

const ComprehensiveAnalysis = () => {
  // Fixed array for Q1 years (as strings)
  const fixedYearsData = [
    { year: "2015" },
    { year: "2016" },
    { year: "2017" },
    { year: "2018" },
    { year: "2019" },
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2023" },
    { year: "2024" },
    { year: "2025" }
  ];

  // This helper maps each company's historical_q1 data onto the fixed years.
  const transformLineData = company =>
    fixedYearsData.map(d => ({
      year: d.year,
      performance:
        company.historical_q1.find(q => q.year.toString() === d.year)?.performance ?? null
    }));

  const metrics = [
    { value: 'marketCap', label: 'Market Cap (B$)' },
    { value: 'peRatio', label: 'P/E Ratio' },
    { value: 'operatingMargin', label: 'Operating Margin (%)' },
    { value: 'revenue_growth', label: 'Revenue Growth (%)' },
    { value: 'sentiment', label: 'Market Sentiment (0-100)' },
    { value: 'analystRating', label: 'Analyst Rating (1-5)' },
    { value: 'shortInterest', label: 'Short Interest (%)' }
  ];

  const [selectedStocksBySection, setSelectedStocksBySection] = useState(
    Object.keys(updatedStockData).reduce((acc, section) => {
      acc[section] = [];
      return acc;
    }, {})
  );

  const [selectedMetricsBySection, setSelectedMetricsBySection] = useState(
    Object.keys(updatedStockData).reduce((acc, section) => {
      acc[section] = 'marketCap';
      return acc;
    }, {})
  );

  const getFilteredData = (section, companies) =>
    !selectedStocksBySection[section].length
      ? companies
      : companies.filter(company =>
          selectedStocksBySection[section].includes(company.ticker)
        );

  const formatMetricValue = (metric, value) =>
    value === null || value === undefined
      ? 'N/A'
      : ['marketCap', 'peRatio', 'operatingMargin', 'revenue_growth', 'shortInterest'].includes(metric)
      ? value.toFixed(2)
      : metric === 'sentiment'
      ? value.toFixed(0)
      : value.toFixed(1);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '10px' }}>
        Digital Entertainment Sector Analysis
      </h1>
      <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '30px' }}>
        Live Market Data Analysis
      </p>

      {Object.entries(updatedStockData).map(([section, companies]) => (
        <div key={section} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', marginBottom: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{section}</h2>
            <select
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db' }}
              value={selectedMetricsBySection[section]}
              onChange={e =>
                setSelectedMetricsBySection(prev => ({
                  ...prev,
                  [section]: e.target.value
                }))
              }
            >
              {metrics.map(metric => (
                <option key={metric.value} value={metric.value}>
                  {metric.label}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Selector Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            <button
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: selectedStocksBySection[section].length === 0 ? '#2563eb' : '#e5e7eb',
                color: selectedStocksBySection[section].length === 0 ? '#ffffff' : '#374151',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() =>
                setSelectedStocksBySection(prev => ({
                  ...prev,
                  [section]: []
                }))
              }
            >
              All Stocks
            </button>
            {companies.map(company => (
              <button
                key={company.ticker}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  backgroundColor: selectedStocksBySection[section].includes(company.ticker)
                    ? company.color
                    : '#f3f4f6',
                  color: selectedStocksBySection[section].includes(company.ticker)
                    ? '#ffffff'
                    : '#374151',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() =>
                  setSelectedStocksBySection(prev => ({
                    ...prev,
                    [section]: prev[section].includes(company.ticker)
                      ? prev[section].filter(t => t !== company.ticker)
                      : [...prev[section], company.ticker]
                  }))
                }
              >
                {company.ticker}
              </button>
            ))}
          </div>

          {/* Charts */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginBottom: '30px' }}>
            {/* Bar Chart for Selected Metric */}
            <div style={{ width: '600px', height: 400, border: '1px solid #e5e7eb', borderRadius: '4px', padding: '10px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getFilteredData(section, companies)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ticker" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={selectedMetricsBySection[section]} fill="#3b82f6">
                    {companies.map(entry => (
                      <Cell key={`cell-${entry.ticker}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Q1 Performance Line Chart */}
            <div style={{ width: '600px', height: 400, border: '1px solid #e5e7eb', borderRadius: '4px', padding: '10px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fixedYearsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {getFilteredData(section, companies).map(company => (
                    <Line
                      key={company.ticker}
                      type="monotone"
                      data={transformLineData(company)}
                      dataKey="performance"
                      name={company.ticker}
                      stroke={company.color}
                      connectNulls
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Data Table */}
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f9fafb' }}>
                <tr>
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.875rem', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                    Company
                  </th>
                  {metrics.map(metric => (
                    <th
                      key={metric.value}
                      style={{ padding: '12px', textAlign: 'left', fontSize: '0.875rem', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}
                    >
                      {metric.label}
                    </th>
                  ))}
                  <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.875rem', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                    AI Exposure
                  </th>
                </tr>
              </thead>
              <tbody>
                {getFilteredData(section, companies).map((company, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                    <td style={{ padding: '12px' }}>
                      <div style={{ fontWeight: 'bold', color: company.color }}>{company.name}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{company.ticker}</div>
                    </td>
                    {metrics.map(metric => (
                      <td
                        key={metric.value}
                        style={{
                          padding: '12px',
                          fontSize: '0.875rem',
                          color: metric.value === 'revenue_growth' && company[metric.value] !== null
                            ? company[metric.value] >= 0 ? '#16a34a' : '#dc2626'
                            : '#374151'
                        }}
                      >
                        {formatMetricValue(metric.value, company[metric.value])}
                      </td>
                    ))}
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor:
                          company.aiExposure === 'High'
                            ? '#d1fae5'
                            : company.aiExposure === 'Medium'
                            ? '#fef3c7'
                            : '#f3f4f6',
                        color:
                          company.aiExposure === 'High'
                            ? '#065f46'
                            : company.aiExposure === 'Medium'
                            ? '#92400e'
                            : '#374151'
                      }}>
                        {company.aiExposure}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Summary Definitions Section */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Definitions & Methodologies</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#4b5563', lineHeight: '1.6' }}>
          <li><strong>Market Cap:</strong> The total market value of a company's outstanding shares, calculated as the share price multiplied by the number of shares outstanding.</li>
          <li><strong>P/E Ratio:</strong> The price-to-earnings ratio, computed by dividing the current share price by the earnings per share.</li>
          <li><strong>Operating Margin:</strong> Calculated as (Operating Income / Revenue) * 100, indicating the percentage of revenue remaining after operating expenses.</li>
          <li><strong>Revenue Growth:</strong> The percentage increase in revenue compared to a previous period.</li>
          <li><strong>Market Sentiment:</strong> A subjective measure (0-100) reflecting the overall market perception of a company's performance.</li>
          <li><strong>Analyst Rating:</strong> A consensus rating (with 1 being best and 5 being worst) based on various financial and performance indicators.</li>
          <li><strong>Short Interest:</strong> The percentage of a company's shares that are currently sold short, which may indicate market skepticism.</li>
          <li>
            <strong>Q1 Performance:</strong> Calculated as the percentage change in the closing price from the first trading day of Q1 to the last trading day of Q1. The formula used is:{" "}
            <em>
              ((Closing Price on last day of Q1 - Closing Price on first day of Q1) / Closing Price on first day of Q1) * 100
            </em>{" "}
            (rounded to two decimal places).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComprehensiveAnalysis;
