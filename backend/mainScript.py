import streamlit as st
import sqlite3 

number = 9

db = sqlite3.connect("points.db")
st.markdown('<div style="text-align: center;"><h1>Andrew Tate Simulator</h1></div>', unsafe_allow_html = True)
st.divider()

column_object, column_points, column_dest = st.columns(3)

with column_object:
    st.markdown('<div style="text-align: center;"><h3>Object</h3></div>', unsafe_allow_html=True)
    st.markdown('<div style="text-align: center;">The Object You Scanned Is</div>', unsafe_allow_html=True)
    #This line will display the image of the item that was scanned
    #st.image("")

with column_points:
    st.markdown('<div style="text-align: center;"><h3>Points</h3></div>', unsafe_allow_html=True)
    st.markdown('<div style="text-align: center;">Congratulations! You Have Earned <strong>' + str(number) 
                + '</strong> points!</div>', unsafe_allow_html = True)
    if(number < 3):
        st.image("https://previews.123rf.com/images/fotogestoeber/fotogestoeber1510/fotogestoeber151000078/47425532-many-thumbs-up-to-nice-job.jpg")
    elif(number >= 3 and number < 6):
        st.image("https://t4.ftcdn.net/jpg/03/02/23/41/360_F_302234132_DdWLIbq1G7018YUbjIosA3EmOdgAz9t2.jpg")
    elif(number >= 6):
        st.image("https://chemistry.illinois.edu/sites/default/files/2023-04/excellent%20image.jpg")


with column_dest:
    st.markdown('<div style="text-align: center;"><h3>Dispose</h3></div>', unsafe_allow_html=True)
    st.markdown('<div style="text-align: center;">Well Done! This Object Should Be Thrown In The</div>', unsafe_allow_html=True)
    #Using the object label, loop to figure out where this object belongs in:
    #Loop ends when the object detected is dropped into the bin and points will be rewarded accordingly
    # While(!object_is_dropped):
    #     if(object == Paper):
    #         st.image("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13212.png")
    #         st.markdown("RECYCLE BIN")
    #     elif(object == Trash):
    #         st.image("https://i.etsystatic.com/15517402/r/il/e64a5b/3310297172/il_794xN.3310297172_k16t.jpg")
    #         st.markdown("TRASH BIN")
    #     elif(object == Refundable):
    #         st.image("https://images-na.ssl-images-amazon.com/images/I/61bGpR7n4cL._AC_UL600_SR600,600_.jpg")
    #         st.markdown("REFUNDABLES BIN")
    #     elif(object == Organic):
    #         st.image("https://m.media-amazon.com/images/I/71yEJOuk-pL.jpg")
    #         st.markdown("COMPOST BIN")
         

#object label, points, where it belonds

