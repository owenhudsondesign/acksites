'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function IntakePage() {
    const [formData, setFormData] = useState({
        businessName: '',
        yourName: '',
        email: '',
        phone: '',
        businessDescription: '',
        hasWebsite: '',
        websiteUrl: '',
        pages: {
            home: false,
            about: false,
            services: false,
            contact: false,
            menu: false,
            gallery: false,
            other: false,
        },
        otherPages: '',
        hasLogo: '',
        hasPhotos: '',
        websiteInspiration: '',
        additionalNotes: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (page: string) => {
        setFormData((prev) => ({
            ...prev,
            pages: { ...prev.pages, [page]: !prev.pages[page as keyof typeof prev.pages] },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Format the data for submission
        const selectedPages = Object.entries(formData.pages)
            .filter(([_, checked]) => checked)
            .map(([page]) => page.charAt(0).toUpperCase() + page.slice(1))
            .join(', ');

        const emailBody = `
New AckSites Intake Form Submission

Business Name: ${formData.businessName}
Contact Name: ${formData.yourName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Business Description:
${formData.businessDescription}

Existing Website: ${formData.hasWebsite}${formData.websiteUrl ? ` - ${formData.websiteUrl}` : ''}

Pages Needed: ${selectedPages}${formData.otherPages ? ` (Other: ${formData.otherPages})` : ''}

Has Logo: ${formData.hasLogo}
Has Photos: ${formData.hasPhotos}

Website Inspiration:
${formData.websiteInspiration || 'Not provided'}

Additional Notes:
${formData.additionalNotes || 'None'}
        `.trim();

        // Open email client with pre-filled data
        const mailtoLink = `mailto:hello@acksites.com?subject=Intake Form: ${encodeURIComponent(formData.businessName)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen relative flex items-center justify-center p-6">
                <Image
                    src="/images/orange-background.png"
                    alt=""
                    fill
                    priority
                    className="object-cover -z-10"
                />
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#191919] mb-4">Thank you!</h2>
                    <p className="text-gray-600">Your email client should have opened with the form details. If it didn&apos;t, please email me directly at hello@acksites.com</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Fixed background */}
            <div className="fixed inset-0 h-screen w-full -z-10">
                <Image
                    src="/images/orange-background.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Scrollable content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center py-8 px-6">
                {/* Header */}
                <div className="w-full max-w-2xl mb-8">
                    <Image
                        src="/acksites-logo-white.svg"
                        alt="AckSites"
                        width={140}
                        height={32}
                        className="h-8 w-auto"
                    />
                </div>

                {/* Form Container */}
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#191919] mb-2">
                        Project Intake Form
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Fill out the form below to get started. I&apos;ll be in touch within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Business Name */}
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-[#191919] mb-2">
                                Business name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                required
                                value={formData.businessName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Your Name */}
                        <div>
                            <label htmlFor="yourName" className="block text-sm font-medium text-[#191919] mb-2">
                                Your name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="yourName"
                                name="yourName"
                                required
                                value={formData.yourName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#191919] mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#191919] mb-2">
                                Phone <span className="text-gray-400">(optional)</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Business Description */}
                        <div>
                            <label htmlFor="businessDescription" className="block text-sm font-medium text-[#191919] mb-2">
                                What does your business do? <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="businessDescription"
                                name="businessDescription"
                                required
                                rows={2}
                                placeholder="1-2 sentences"
                                value={formData.businessDescription}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition resize-none"
                            />
                        </div>

                        {/* Existing Website */}
                        <div>
                            <label className="block text-sm font-medium text-[#191919] mb-2">
                                Do you have an existing website? <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Yes', 'No'].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value={option}
                                            checked={formData.hasWebsite === option}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-[#ff9433] focus:ring-[#ff9433]"
                                            required
                                        />
                                        <span className="text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                            {formData.hasWebsite === 'Yes' && (
                                <input
                                    type="text"
                                    name="websiteUrl"
                                    placeholder="yourwebsite.com"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                    className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                                />
                            )}
                        </div>

                        {/* Pages Needed */}
                        <div>
                            <label className="block text-sm font-medium text-[#191919] mb-2">
                                What pages do you need? <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { key: 'home', label: 'Home' },
                                    { key: 'about', label: 'About' },
                                    { key: 'services', label: 'Services' },
                                    { key: 'contact', label: 'Contact' },
                                    { key: 'menu', label: 'Menu' },
                                    { key: 'gallery', label: 'Gallery' },
                                    { key: 'other', label: 'Other' },
                                ].map(({ key, label }) => (
                                    <label key={key} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.pages[key as keyof typeof formData.pages]}
                                            onChange={() => handleCheckbox(key)}
                                            className="w-4 h-4 text-[#ff9433] rounded focus:ring-[#ff9433]"
                                        />
                                        <span className="text-gray-700">{label}</span>
                                    </label>
                                ))}
                            </div>
                            {formData.pages.other && (
                                <input
                                    type="text"
                                    name="otherPages"
                                    placeholder="What other pages?"
                                    value={formData.otherPages}
                                    onChange={handleChange}
                                    className="mt-3 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition"
                                />
                            )}
                        </div>

                        {/* Has Logo */}
                        <div>
                            <label className="block text-sm font-medium text-[#191919] mb-2">
                                Do you have a logo? <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Yes', 'No', 'I need one'].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasLogo"
                                            value={option}
                                            checked={formData.hasLogo === option}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-[#ff9433] focus:ring-[#ff9433]"
                                            required
                                        />
                                        <span className="text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Has Photos */}
                        <div>
                            <label className="block text-sm font-medium text-[#191919] mb-2">
                                Do you have photos you&apos;d like to use? <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Yes', 'No', "I'll need guidance"].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasPhotos"
                                            value={option}
                                            checked={formData.hasPhotos === option}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-[#ff9433] focus:ring-[#ff9433]"
                                            required
                                        />
                                        <span className="text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Website Inspiration */}
                        <div>
                            <label htmlFor="websiteInspiration" className="block text-sm font-medium text-[#191919] mb-2">
                                Any websites you like the look of? <span className="text-gray-400">(optional)</span>
                            </label>
                            <textarea
                                id="websiteInspiration"
                                name="websiteInspiration"
                                rows={2}
                                placeholder="Paste links or describe what you like"
                                value={formData.websiteInspiration}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition resize-none"
                            />
                        </div>

                        {/* Additional Notes */}
                        <div>
                            <label htmlFor="additionalNotes" className="block text-sm font-medium text-[#191919] mb-2">
                                Anything else I should know? <span className="text-gray-400">(optional)</span>
                            </label>
                            <textarea
                                id="additionalNotes"
                                name="additionalNotes"
                                rows={3}
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9433] focus:border-transparent outline-none transition resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#ff9433] hover:bg-[#e8852e] text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
