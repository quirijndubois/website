import streamlit as st
from streamlit_option_menu import option_menu
from PIL import Image,ImageDraw
import numpy as np
import data_en
import data_nl


data = data_en

def picture_to_circle(picture):
    img=picture.convert("RGB")
    npImage=np.array(img)
    h,w=img.size
    alpha = Image.new('L', img.size,0)
    draw = ImageDraw.Draw(alpha)
    draw.pieslice([0,0,h,w],0,360,fill=255)
    npAlpha=np.array(alpha)
    npImage=np.dstack((npImage,npAlpha))
    return Image.fromarray(npImage)

profile_picture = "media/pf.jpg"
profile_picture = Image.open(profile_picture)
profile_picture = picture_to_circle(profile_picture)

st.set_page_config(page_title=data.page_title,page_icon=data.page_icon)

with open("style/main.css") as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

c1,c2 = st.columns([3,1])
language = c2.selectbox("Language",["English","Nederlands"],label_visibility="hidden")
if language == "Nederlands":
    data = data_nl

c1,c2 = st.columns(2,gap="small")
c1.image(profile_picture,width=200)
c2.title(data.name)
c2.write(data.name_description)

st.write("---")

cols = st.columns(len(data.social_media))
for index,(platform,link) in enumerate(data.social_media.items()):
    cols[index].write(f"[{platform}]({link})")

st.write("##")

#navigation
selected = option_menu(
    menu_title=None,
    options=[data.pages[0],data.pages[1],data.pages[2]],
    orientation="horizontal",
    icons=["house","book","send"]
)

if selected == data.pages[0]:
    with st.container():
        st.header(data.headers[data.pages[0]][0])
        st.write(data.headers[data.pages[0]][1])
        for subheader in data.subheaders1:
            st.write("##")
            st.subheader(subheader[0])
            st.write(subheader[1])

if selected == data.pages[1]:
    with st.container():
        st.header(data.headers[data.pages[1]][0])
        st.write(data.headers[data.pages[1]][1])
        for subheader in data.subheaders2:
            st.write("##")
            st.subheader(subheader[0])
            st.write(subheader[1])

if selected == data.pages[2]:
    contact_form = f"""
    <form action="https://formsubmit.co/quirijndubois+contact@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="text" name="name" placeholder="{data.contact_form[0]}" required>
        <input type="email" name="email" placeholder = "{data.contact_form[1]}" required>
        <textarea name="message" placeholder="{data.contact_form[2]}"></textarea>
        <button type="submit">Send</button>
    </form> 
    """
    st.markdown(contact_form,unsafe_allow_html=True)

def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>",unsafe_allow_html=True)
local_css("style/style.css")
