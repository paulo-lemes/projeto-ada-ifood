#include <iostream>
#include "cidadesbrasil.h"

using namespace std;

cidadesBrasil::cidadesBrasil(int pop = -1, int a = -1)
{
    populacao = pop;
    ano = a;
};
void cidadesBrasil::setpopulacao(int pop)
{
    populacao = pop;
};
int cidadesBrasil::getpopulacao()
{
    return populacao;
};
void cidadesBrasil::setano(int a)
{
    ano = a;
};
int cidadesBrasil::getano()
{
    return ano;
}