#! /usr/bin/env python3
# coding: utf-8

from app_pybot.request_tools.parser import Parser


class TestParser:
    """This class test GrandPy Bot Parser
    """

    def setup(self):
        self.ps = Parser()

    def test_clean_empty(self):
        """Test the parser with an empty sentence
        """
        assert self.ps.clean("") == ""

    def test_clean_punctuation(self):
        """Test the parser with a sentence containing
        only non significant elements
        """
        assert self.ps.clean("Où donc, dis-moi ?") == ""

    def test_clean_case(self):
        """Test the parser with a sentence to transform in lowercase
        """
        assert self.ps.clean(
            "Situe MaisOns-LaffiTte"
        ) == "situe maisons-laffitte"

    def test_clean_stopwords(self):
        """Test the parser with a basic user request
        """
        assert self.ps.clean(
            "Dis-moi GrandPyBot, où se trouve la tour Eiffel ?"
        ) == "grandpybot trouve tour eiffel"


if __name__ == "__main__":
    pass
