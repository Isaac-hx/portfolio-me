import React, { ChangeEvent, InputHTMLAttributes,useState } from 'react';

// Definisikan tipe props untuk komponen Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;              // Label opsional untuk input
  value: string | number;      // Nilai input (wajib)
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Handler perubahan
  error?: string;             // Pesan error opsional
  placeholder?: string;        // Placeholder opsional
  type?: string;              // Tipe input (default: 'text')
  disabled?: boolean;         // Status disabled opsional
  name: string;               // Nama input untuk form (wajib)
  className?: string;         // Kelas CSS tambahan opsional
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder = '',
  type = 'text',
  disabled = false,
  name,
  className = '',
  ...rest
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={name} // Menambahkan id untuk label
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name} // Menambahkan name untuk form submission
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-200 disabled:cursor-not-allowed ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...rest}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

const Contact:React.FC = () =>{
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    description:''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    description:''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validasi sederhana
    if (name === 'username' && value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        username: 'Username must be at least 3 characters long',
      }));
    } else if (name === 'username' && value.length >= 3) {
      setErrors((prev) => ({
        ...prev,
        username: '',
      }));
    }

    if (name === 'email' && !value.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prev) => ({
        ...prev,
        email: 'Please enter a valid email address',
      }));
    } else if (name === 'email' && value.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prev) => ({
        ...prev,
        email: '',
      }));
    }
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.username && !errors.email && !errors.description) {
      // Buat URL untuk Gmail dengan data form
      const subject = encodeURIComponent(`Message from ${formData.username}`);
      const body = encodeURIComponent(`Name: ${formData.username}\nEmail: ${formData.email}\nDescription: ${formData.description}`);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dimasanandariyadi@gmail.com&su=${subject}&body=${body}`;

      // Redirect ke URL Gmail di tab baru
      window.open(gmailUrl, '_blank');

      // Reset form setelah redirect
      setFormData({ username: '', email: '', description: '' });
      setErrors({ username: '', email: '', description: '' });
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div id='contact' className='flex items-center md:flex-row flex-col justify-center md:justify-around'>
    <div className="max-w-lg my-8 p-6">
      <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
      <p className='text-md text-gray-600 my-2'> 
        Have a question or want to work together? Fill out the form and i'll get back to you as soon as possible.


      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          placeholder="Enter your username"
          type="text"
        />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
          type="email"
        />       
        <Input
          label="Message"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="Enter your message"
          type="t"
        />
        
        <button
          type="submit"
          className="w-full bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>

    <div>
        <div className='hidden md:block'>
            <img width={350} src="/undrawemail.svg" alt="mail" />
        </div>
           <ul className='flex gap-4 mt-4'>
            <li>
                <a href="https://github.com/Isaac-hx">
                  <img width={30} src="/icongithub.svg" alt="github" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/dimas-ananda-riyadi/">
                    <img width={30} src="/iconlinkedin.svg" alt="linkedin" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/dev_isaachx/">
                    <img width={30} src="/iconinstagram.svg" alt='instagram'/>
                </a>
            </li>
        </ul>
    </div>
    </div>

  );
};


export default Contact