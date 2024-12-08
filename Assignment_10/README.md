# Assignment_10

Demonstrate Various Dimensionality Reduction Techniques

## Contents

### Part 1: Image Dataset

- Dimensionality Reduction Image Dataset Colab Link: 

https://colab.research.google.com/drive/1sMWc3gm-R1w5v5KvyXJ4LWdrbzhQ0Tjj?usp=sharing

### Part 2: Tabular Dataset

- Dimensionality Reduction Tabular Dataset Colab Link: 

https://colab.research.google.com/drive/1OC4biGAEOu8C-m0v2o-ehIgOxzn7Okq-?usp=sharing

### Part 3: Databricks

- Dimensionality Reduction Using Databricks Link:
  https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/501331277309159/1548989626704335/8250881925549742/latest.html

---

## **Key Insights**

### **1. Speed and Scalability**
- UMAP and Randomized PCA excel in terms of speed and scalability.
- Autoencoders and t-SNE require more computational resources and time.

### **2. Structure Preservation**
- UMAP and ISOMAP provide a balance of global and local structure preservation.
- t-SNE and LLE focus on local structures, sometimes at the expense of global relationships.

### **3. Flexibility**
- Autoencoders are the most flexible, capable of capturing non-linear patterns and reconstructing data.

---

## **Dimensionality Reduction Techniques**

| **Technique**       | **Speed** | **Global Structure** | **Local Structure** | **Scalability** | **Best Use Case**                                                                 |
|----------------------|-----------|-----------------------|---------------------|-----------------|-----------------------------------------------------------------------------------|
| **LLE**             | Slow      | Poor                 | Excellent           | Low             | Small datasets with non-linear local structures.                                 |
| **t-SNE**           | Slow      | Poor                 | Excellent           | Moderate        | High-dimensional datasets for interactive cluster visualization.                |
| **UMAP**            | Fast      | Good                 | Excellent           | High            | Large datasets requiring efficient, interactive visualization.                  |
| **ISOMAP**          | Moderate  | Excellent            | Moderate            | Low             | Geometric or spatial data with manifold structures.                              |
| **MDS**             | Slow      | Excellent            | Poor                | Low             | Small datasets emphasizing distance preservation.                                |
| **Randomized PCA**  | Fast      | Excellent            | Poor                | High            | Large-scale tabular data prioritizing speed and variance.                       |
| **Kernel PCA**      | Moderate  | Good                 | Good                | Moderate        | Non-linear relationships in medium-sized datasets.                              |
| **Incremental PCA** | Fast      | Excellent            | Poor                | High            | Large datasets that do not fit into memory.                                     |
| **Factor Analysis** | Fast      | Excellent            | Poor                | High            | Tabular data focusing on latent factors.                                        |
| **Autoencoders**    | Moderate  | Excellent            | Excellent           | Moderate        | Reconstruction and feature extraction for non-linear data.                      |

---



- Video Link:  [Watch here](https://youtu.be/XvtW7Znyjbk)
