# Assignment_10

Demonstrate Various Dimensionality Reduction Techniques

## Contents

### Part 1: Image Dataset

- Dimensionality Reduction Image Dataset Colab Link: 

https://colab.research.google.com/drive/1mNbG5_woa4IiZKm9ZVzrITFPfrHSypB0?usp=sharing

### Part 2: Tabular Dataset

- Dimensionality Reduction Tabular Dataset Colab Link: 

https://colab.research.google.com/drive/1JW8DmOH2OajlPlwAiFQC8ftidVhy4ivg?usp=sharing

### Part 3: Databricks

- Dimensionality Reduction Using Databricks Colab Link:

https://colab.research.google.com/drive/1ZuWHLytcgnFG-v-nt9BiZrqXdtCstRC7?usp=sharing

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
