import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, CheckCircle, AlertCircle, Send } from 'lucide-react';

const jobApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  availability: z.string().min(1, 'Please select your availability'),
  salary: z.string().optional(),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
  linkedin: z.string().url().optional().or(z.literal('')),
  portfolio: z.string().url().optional().or(z.literal('')),
});

type JobApplicationData = z.infer<typeof jobApplicationSchema>;

interface JobApplicationFormProps {
  position?: string;
}

export function JobApplicationForm({ position }: JobApplicationFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      position: position || '',
    }
  });

  const onSubmit = async (data: JobApplicationData) => {
    setSubmitStatus('loading');
    try {
      // In a real application, this would upload the resume and send the application
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      reset();
      setResumeFile(null);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  const positions = [
    'Licensed Insurance Agent',
    'Customer Service Representative',
    'Marketing Coordinator',
    'Sales Manager',
    'Underwriting Specialist',
    'Claims Adjuster',
    'Office Manager',
    'IT Support Specialist'
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for a Position</h2>
        <p className="text-gray-600">Join our team and start your career in insurance</p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-green-800 font-medium">Application Submitted Successfully!</p>
            <p className="text-green-700 text-sm mt-1">
              Thank you for your interest in joining 4 Bridges Insurance Company. We'll review your application and get back to you within 3-5 business days.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-red-800">There was an error submitting your application. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="john.doe@email.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Position and Experience */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
              Position Applied For *
            </label>
            <select
              id="position"
              {...register('position')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select a position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
            {errors.position && <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>}
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience *
            </label>
            <select
              id="experience"
              {...register('experience')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select experience level</option>
              <option value="entry">Entry Level (0-2 years)</option>
              <option value="mid">Mid Level (2-5 years)</option>
              <option value="senior">Senior Level (5-10 years)</option>
              <option value="expert">Expert Level (10+ years)</option>
            </select>
            {errors.experience && <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>}
          </div>
        </div>

        {/* Availability and Salary */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
              When Can You Start? *
            </label>
            <select
              id="availability"
              {...register('availability')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select availability</option>
              <option value="immediate">Immediately</option>
              <option value="2weeks">Within 2 weeks</option>
              <option value="1month">Within 1 month</option>
              <option value="2months">Within 2 months</option>
              <option value="negotiable">Negotiable</option>
            </select>
            {errors.availability && <p className="text-red-600 text-sm mt-1">{errors.availability.message}</p>}
          </div>
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
              Salary Expectations
            </label>
            <input
              type="text"
              id="salary"
              {...register('salary')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="e.g., $50,000 - $60,000"
            />
          </div>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume/CV (PDF only) *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="resume"
              required
            />
            <label htmlFor="resume" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">
                {resumeFile ? (
                  <span className="text-green-600 font-medium">{resumeFile.name}</span>
                ) : (
                  'Click to upload your resume'
                )}
              </p>
              <p className="text-sm text-gray-500 mt-1">PDF files only, max 10MB</p>
            </label>
          </div>
        </div>

        {/* Cover Letter */}
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
            Cover Letter *
          </label>
          <textarea
            id="coverLetter"
            {...register('coverLetter')}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
          />
          {errors.coverLetter && <p className="text-red-600 text-sm mt-1">{errors.coverLetter.message}</p>}
        </div>

        {/* Optional Links */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn Profile (Optional)
            </label>
            <input
              type="url"
              id="linkedin"
              {...register('linkedin')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="https://linkedin.com/in/yourprofile"
            />
            {errors.linkedin && <p className="text-red-600 text-sm mt-1">{errors.linkedin.message}</p>}
          </div>
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio/Website (Optional)
            </label>
            <input
              type="url"
              id="portfolio"
              {...register('portfolio')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="https://yourportfolio.com"
            />
            {errors.portfolio && <p className="text-red-600 text-sm mt-1">{errors.portfolio.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitStatus === 'loading' || !resumeFile}
          className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Submit job application"
        >
          {submitStatus === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Submitting Application...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit Application
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this application, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
}