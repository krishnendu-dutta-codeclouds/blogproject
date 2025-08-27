import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { Button, Typography } from '@material-tailwind/react';
import myContext from '../../../context/data/myContext';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import toast from 'react-hot-toast';

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode } = context;

  const [blogs, setBlogs] = useState({
    title: '',
    category: '',
    content: '',
    time: Timestamp.now(),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(fireDB, 'blogPost', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setBlogs({ ...data.blogs, time: data.time });
        }
        setLoading(false);
      } catch (error) {
        toast.error('Failed to load blog');
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleEditorChange = (value) => {
    setBlogs({ ...blogs, content: value });
  };

  const handleUpdate = async () => {
    if (!blogs.title || !blogs.category || !blogs.content) {
      toast.error('Please fill all fields');
      return;
    }
    try {
      const docRef = doc(fireDB, 'blogPost', id);
      await updateDoc(docRef, { blogs, time: Timestamp.now() });
      toast.success('Blog updated successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to update blog');
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-5xl py-6">
        <div className="p-5" style={{
          background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
          borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
        }}>
          <Typography variant="h4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Edit Blog
          </Typography>
          <div className="mb-3 mt-4">
            <input
              className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none mb-3"
              placeholder="Enter Your Title"
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
              name="title"
              onChange={e => setBlogs({ ...blogs, title: e.target.value })}
              value={blogs.title}
            />
            <input
              className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none mb-3"
              placeholder="Enter Your Category"
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
              name="category"
              onChange={e => setBlogs({ ...blogs, category: e.target.value })}
              value={blogs.category}
            />
            <ReactQuill
              theme="snow"
              value={blogs.content}
              onChange={handleEditorChange}
              className="mb-6 bg-white"
              style={{ minHeight: '200px' }}
            />
            <Button className="w-full mt-5" onClick={handleUpdate}
              style={{ background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)', color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)' }}>
              Update Blog
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditBlog;
