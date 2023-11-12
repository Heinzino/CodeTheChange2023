import streamlit as st
import matplotlib.pyplot as plt

#Forcing page appearance to be wide
st.set_page_config(layout='wide')

#Background using A Green-Black gradient wallpaper picture
page_bg_img = """
<style>
    .stApp {
        background-image: url("https://shorturl.at/dkHT1");
        background-size: 100% 200%;
        background-position: top left;
        background-repeat: no-repeat;
        background-attachment: local;
        height: 100vh; 
    }

    h1 {
        margin-top:-90px;
    }

    h3 {
        margin-top:-30px;
    }
</style>
"""

st.markdown(page_bg_img, unsafe_allow_html=True)

#Title of the App
st.markdown('<div style="text-align: center;"><h1>Eco Scanner</h1></div>', unsafe_allow_html=True)
st.divider()

#Columns
column_object, column_points, column_dest = st.columns(3)

with column_object:
    st.markdown('<div style="text-align: center;"><h3>Object</h3></div>', unsafe_allow_html=True)
    st.markdown('<div style="text-align: center;">The Object You Scanned Is</div>', unsafe_allow_html=True)

with column_points:
    st.markdown('<div style="text-align: center;"><h3>Points</h3></div>', unsafe_allow_html=True)


with column_dest:
    st.markdown('<div style="text-align: center;"><h3>Dispose</h3></div>', unsafe_allow_html=True)
    st.markdown('<div style="text-align: center;">Well Done! This Object Should Be Thrown In The</div>', unsafe_allow_html=True)

st.divider()

# Pie chart
labels = 'Recycling', 'Compost', 'Refundables', 'Landfill'
sizes = [15, 30, 45, 10]
explode = (0, 0, 0.1, 0) 

fig1, ax1 = plt.subplots(facecolor='none')

patches, texts, pcts = ax1.pie(
    sizes, labels=labels, autopct='%.1f%%',
    wedgeprops={'linewidth': 3.0},
    textprops={'size': 'x-large'},
    explode=explode,
    shadow=True,
    startangle=90)

for i, patch in enumerate(patches):
  texts[i].set_color(patch.get_facecolor())

plt.setp(pcts, color='white')
plt.setp(texts, fontweight=600)
ax1.set_title("Item(s) Disposed", color='White', fontsize=18)
plt.tight_layout()

# Equal aspect ratio ensures that pie is drawn as a circle.
ax1.axis('equal')  

fig1.patch.set_facecolor('none')
ax1.set_facecolor('none')

#Columns for Camera and pie to separate from the 3 other columns
column_pie, column_camera = st.columns(2)

with column_pie:
    st.pyplot(fig1)

with column_camera:
    st.camera_input("Camera", label_visibility='hidden', key="capture_image")

    # Uses CSS to hide the button that takes a picture cause we don't need it 
    st.markdown(
        """
        <style>
            #root div[data-testid="stCameraInput"] button {
                display: none;
            }
        </style>
        """,
        unsafe_allow_html=True
    )



