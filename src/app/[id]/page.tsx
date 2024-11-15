import { Post } from "@/app/post-list";
import BackButton from "@/app/[id]/back-button";
import TestButton from "@/app/[id]/test-button";
import WebPushButton from "@/app/[id]/web-push-button";

interface Params {
    id: string;
}

export default async function PostDetail({ params }: { params: Promise<Params> }) {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await response.json();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <p className="text-gray-700 leading-relaxed">{post.body}</p>
                <div className='flex flex-col gap-1'>
                    <BackButton/>
                    <TestButton/>
                    <WebPushButton/>
                </div>

            </div>
        </div>
    );
}