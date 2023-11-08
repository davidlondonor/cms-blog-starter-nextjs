import React from "react";
import Description from "@/components/Description";
import PageContainer from "@/components/PageContainer";
import Title from "@/components/Title";
import { Main } from "next/document";

export default async function About() {
	return (
		<PageContainer>
			<h1 className="text-3xl font-bold underline">About</h1>
			<Main>
				<Title>About this</Title>
				<Description>Some info about us</Description>
			</Main>
		</PageContainer>
	);
}
