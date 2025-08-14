"use client";

import { usePosts } from "@/hooks/usePosts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { posts } = usePosts();

  return (
    <div className="py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nuestras costumbres y tradiciones</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-neutral mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post._id}>
                <Link href="blog/1" className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5">
                  {/*<div className="aspect-w-16 aspect-h-11">
                    <Image className="w-full object-cover rounded-xl" width={200} height={200} src="/church.jpg" alt="Blog Image" />
                  </div>*/}
                  <div className="my-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-gray-600">
                      {post.content}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-x-3">
                    <h5 className="text-sm text-gray-800">{post.author}</h5>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Read more
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}