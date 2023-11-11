import streamlit as st
import sqlite3 

db = sqlite3.connect("points.db")
st.write("#Hello This is Title")
