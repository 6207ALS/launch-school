--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: valid_spectral; Type: TYPE; Schema: public; Owner: al6207
--

CREATE TYPE public.valid_spectral AS ENUM (
    'O',
    'B',
    'A',
    'F',
    'G',
    'K',
    'M'
);


ALTER TYPE public.valid_spectral OWNER TO al6207;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: planets; Type: TABLE; Schema: public; Owner: al6207
--

CREATE TABLE public.planets (
    id integer NOT NULL,
    designation character(1) NOT NULL,
    mass numeric NOT NULL,
    star_id integer NOT NULL,
    semi_major_axis numeric,
    CONSTRAINT planets_mass_check CHECK ((mass > (0)::numeric))
);


ALTER TABLE public.planets OWNER TO al6207;

--
-- Name: planets_id_seq; Type: SEQUENCE; Schema: public; Owner: al6207
--

CREATE SEQUENCE public.planets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planets_id_seq OWNER TO al6207;

--
-- Name: planets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: al6207
--

ALTER SEQUENCE public.planets_id_seq OWNED BY public.planets.id;


--
-- Name: stars; Type: TABLE; Schema: public; Owner: al6207
--

CREATE TABLE public.stars (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    distance numeric NOT NULL,
    spectral_type public.valid_spectral NOT NULL,
    companions integer NOT NULL,
    CONSTRAINT stars_companions_check CHECK ((companions >= 0)),
    CONSTRAINT stars_distance_check CHECK ((distance > (0)::numeric))
);


ALTER TABLE public.stars OWNER TO al6207;

--
-- Name: stars_id_seq; Type: SEQUENCE; Schema: public; Owner: al6207
--

CREATE SEQUENCE public.stars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stars_id_seq OWNER TO al6207;

--
-- Name: stars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: al6207
--

ALTER SEQUENCE public.stars_id_seq OWNED BY public.stars.id;


--
-- Name: planets id; Type: DEFAULT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.planets ALTER COLUMN id SET DEFAULT nextval('public.planets_id_seq'::regclass);


--
-- Name: stars id; Type: DEFAULT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.stars ALTER COLUMN id SET DEFAULT nextval('public.stars_id_seq'::regclass);


--
-- Data for Name: planets; Type: TABLE DATA; Schema: public; Owner: al6207
--

INSERT INTO public.planets VALUES (5, 'b', 0.0036, 8, NULL);
INSERT INTO public.planets VALUES (6, 'c', 0.1, 9, NULL);


--
-- Data for Name: stars; Type: TABLE DATA; Schema: public; Owner: al6207
--

INSERT INTO public.stars VALUES (8, 'Alpha Centauri B', 4.37, 'K', 3);
INSERT INTO public.stars VALUES (9, 'Epsilon Eridani', 10.5, 'K', 0);


--
-- Name: planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: al6207
--

SELECT pg_catalog.setval('public.planets_id_seq', 6, true);


--
-- Name: stars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: al6207
--

SELECT pg_catalog.setval('public.stars_id_seq', 9, true);


--
-- Name: planets planets_designation_key; Type: CONSTRAINT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_designation_key UNIQUE (designation);


--
-- Name: planets planets_pkey; Type: CONSTRAINT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);


--
-- Name: stars stars_name_key; Type: CONSTRAINT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_name_key UNIQUE (name);


--
-- Name: stars stars_pkey; Type: CONSTRAINT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_pkey PRIMARY KEY (id);


--
-- Name: planets planets_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: al6207
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.stars(id);


--
-- PostgreSQL database dump complete
--

